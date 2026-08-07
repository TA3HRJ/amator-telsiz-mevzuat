-- Uzlasi Oylamasi — D1 semasi
-- Kisisel veri yok: IP, cagri isareti, e-posta, oturum saklanmaz.
-- "pusula" rastgele bir UUID'dir; bir gonderimdeki oylari gruplamaya yarar.

CREATE TABLE IF NOT EXISTS oy (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  pusula   TEXT NOT NULL,
  ga_kodu  TEXT NOT NULL,
  secim    TEXT NOT NULL CHECK (secim IN ('A','B','C','D','E')),
  zaman    TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS ix_oy_kod    ON oy (ga_kodu);
CREATE INDEX IF NOT EXISTS ix_oy_pusula ON oy (pusula);

-- "E — Diger gorus" serbest metinleri. Yayimdan once kisisel bilgi taramasi gerekir.
CREATE TABLE IF NOT EXISTS not_metni (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  pusula   TEXT NOT NULL,
  ga_kodu  TEXT NOT NULL,
  metin    TEXT NOT NULL,
  zaman    TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS ix_not_kod ON not_metni (ga_kodu);
