# Kullanım (örnek):
#   from ooxml_metin import Doc, apply
#   d = Doc(xml, "w:p", "w:t")    # .docx: word/document.xml, header*.xml
#   d = Doc(xml, "a:p", "a:t")    # .pptx: ppt/slides/slideN.xml
#   d = Doc(xml, "si", "t")       # .xlsx: xl/sharedStrings.xml (dizge paylaşılır; hücreye özgü
#                                 #   düzenlemede hücreye yeni <si> atayın, bkz. docs/HANDOFF.md)
#   ok = apply(d, [(eski, yeni, beklenen_sayı), (regex, yeni, 1, "re")], log)
#   yeni_xml = d.render("w:t")
# Yalnız standart kütüphane kullanır (python-docx/openpyxl kurulu değil). Oturum PATH'inde
# python bulunmazsa tam yol: C:\Users\Admin\AppData\Local\Programs\Python\Python313\python.exe
# Metin çıktısını okurken PYTHONIOENCODING=utf-8 verin, yoksa Türkçe karakterler bozulur.
"""Ham XML üzerinde, biçimi koruyarak metin değiştirme.

Bir kap öğesinin (w:p veya si) içindeki tüm metin parçaları (w:t veya t) birleştirilip
aranır; eşleşme birden fazla parçaya yayılıyorsa yeni metin ilk parçaya yazılır, diğer
parçalardan eşleşen kısım silinir. Böylece değişmeyen metnin biçimi olduğu gibi kalır.
"""
import re, html

def _esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

class Doc:
    def __init__(self, xml, cont, tt):
        self.xml = xml
        # kap sınırları ve metin parçaları
        self.tre = re.compile(r'<%s(\s[^>]*)?>([^<]*)</%s>' % (re.escape(tt), re.escape(tt)))
        open_re = re.compile(r'<%s(?=[\s>])' % re.escape(cont))
        close_s = '</%s>' % cont
        events = []
        for m in open_re.finditer(xml):
            gt = xml.index('>', m.start())
            if xml[gt - 1] == '/':
                continue  # kendiliğinden kapanan boş kap: <w:p .../>
            events.append((m.start(), 'o'))
        for m in re.finditer(re.escape(close_s), xml):
            events.append((m.start(), 'c'))
        events.sort()
        spans, stack = [], []
        for pos, k in events:
            if k == 'o':
                stack.append(pos)
            else:
                s = stack.pop()
                if not stack:
                    spans.append((s, pos))
        self.paras = []  # her kap için [ [start,end,attrs,text], ... ]
        tms = list(self.tre.finditer(xml))
        i = 0
        for s, e in spans:
            segs = []
            while i < len(tms) and tms[i].start() < s:
                i += 1
            j = i
            while j < len(tms) and tms[j].start() < e:
                m = tms[j]
                segs.append([m.start(), m.end(), m.group(1) or '', html.unescape(m.group(2)), False])
                j += 1
            i = j
            if segs:
                self.paras.append(segs)

    def text(self, p):
        return ''.join(s[3] for s in p)

    def replace(self, old, new, regex=False):
        """old: düz metin veya regex. Dönen: toplam eşleşme sayısı."""
        n = 0
        pat = re.compile(old, re.S) if regex else None
        for p in self.paras:
            pos = 0
            while True:
                full = self.text(p)
                if regex:
                    m = pat.search(full, pos)
                    if not m:
                        break
                    a, b, rep = m.start(), m.end(), m.expand(new)
                else:
                    a = full.find(old, pos)
                    if a < 0:
                        break
                    b, rep = a + len(old), new
                # parça sınırları
                offs, c = [], 0
                for s in p:
                    offs.append(c); c += len(s[3])
                def loc(x, end=False):
                    for k in range(len(p)):
                        lo, hi = offs[k], offs[k] + len(p[k][3])
                        if (lo <= x < hi) or (end and lo < x <= hi):
                            return k, x - lo
                    return len(p) - 1, len(p[-1][3])
                k0, o0 = loc(a)
                k1, o1 = loc(b, end=True) if b > a else (k0, o0)
                if k0 == k1:
                    t = p[k0][3]; p[k0][3] = t[:o0] + rep + t[o1:]; p[k0][4] = True
                else:
                    p[k0][3] = p[k0][3][:o0] + rep; p[k0][4] = True
                    for k in range(k0 + 1, k1):
                        p[k][3] = ''; p[k][4] = True
                    p[k1][3] = p[k1][3][o1:]; p[k1][4] = True
                pos = a + len(rep)
                n += 1
        return n

    def render(self, tt):
        out, last = [], 0
        mods = [s for p in self.paras for s in p if s[4]]
        mods.sort(key=lambda s: s[0])
        for s in mods:
            attrs = s[2]
            if 'xml:space' not in attrs:
                attrs = attrs + ' xml:space="preserve"'
            out.append(self.xml[last:s[0]])
            out.append('<%s%s>%s</%s>' % (tt, attrs, _esc(s[3]), tt))
            last = s[1]
        out.append(self.xml[last:])
        return ''.join(out)


def apply(doc, reps, log):
    ok = True
    for r in reps:
        old, new, exp = r[0], r[1], r[2]
        regex = len(r) > 3 and r[3] == 're'
        n = doc.replace(old, new, regex=regex)
        if n == 0 and not regex and ("'" in old or '"' in old):
            # tipografik tırnak yedeği
            alt = re.escape(old).replace("'", "[’'‘]").replace('"', '[“”"]')
            n = doc.replace(alt, new.replace('\\', '\\\\'), regex=True)
        flag = '' if (exp is None or n == exp) else '  <-- BEKLENEN %s' % exp
        if exp is not None and n != exp:
            ok = False
        log.append('%3d  %s%s' % (n, (old[:70] + '…') if len(old) > 70 else old, flag))
    return ok
