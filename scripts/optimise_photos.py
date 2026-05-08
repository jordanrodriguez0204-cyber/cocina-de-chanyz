#!/usr/bin/env python3
"""
Optimise les photos pour cocina-de-chanyz
------------------------------------------
Usage :
  1. Place tes photos originales dans  scripts/originaux/
  2. Lance :  python3 scripts/optimise_photos.py
  3. Les photos optimisées apparaissent dans  public/images/gateaux/  et  public/images/plats/

Ce que fait le script :
  - Recadre chaque photo au ratio 3:4 (portrait), centré sur le sujet
  - Redimensionne à 900×1200 px (parfait pour le web)
  - Compresse en JPG qualité 88 % (bon équilibre qualité / poids)
  - Renomme selon la convention du site
"""

from PIL import Image, ImageOps
import os, shutil

# ── Configuration ────────────────────────────────────────────────────────────
INPUT_DIR   = os.path.join(os.path.dirname(__file__), 'originaux')
OUTPUT_W    = 900
OUTPUT_H    = 1200   # ratio 3:4
QUALITY     = 88
# ─────────────────────────────────────────────────────────────────────────────

# Mapping  nom_original → nom_final + sous-dossier
# Renomme le fichier source selon son nom exact et il sera converti + placé
MAPPING = {
    # ── Gâteaux ──
    'mariage-3-etages':          'gateaux/mariage-3-etages.jpg',
    'mariage-roses-roses':       'gateaux/mariage-roses-roses.jpg',
    'mariage-rose-or':           'gateaux/mariage-rose-or.jpg',
    'mariage-fuchsia':           'gateaux/mariage-fuchsia.jpg',

    'adulte-blanc-or-roses':     'gateaux/adulte-blanc-or-roses.jpg',
    'adulte-blanc-or-coeurs':    'gateaux/adulte-blanc-or-coeurs.jpg',
    'adulte-bougies-or':         'gateaux/adulte-bougies-or.jpg',
    'adulte-roses-rouges':       'gateaux/adulte-roses-rouges.jpg',

    'enfant-minecraft':          'gateaux/enfant-minecraft.jpg',
    'enfant-licorne':            'gateaux/enfant-licorne.jpg',
    'enfant-simba':              'gateaux/enfant-simba.jpg',
    'enfant-winnie':             'gateaux/enfant-winnie.jpg',
    'enfant-safari-duarte':      'gateaux/enfant-safari-duarte.jpg',
    'enfant-safari-gianna':      'gateaux/enfant-safari-gianna.jpg',
    'enfant-miraculous':         'gateaux/enfant-miraculous.jpg',

    'evenement-musique':         'gateaux/evenement-musique.jpg',
    'evenement-livre-iglesia':   'gateaux/evenement-livre-iglesia.jpg',
    'evenement-livre-pastor':    'gateaux/evenement-livre-pastor.jpg',

    # ── Plats ──
    'empanadas':                 'plats/empanadas.jpg',
}

def smart_crop(img: Image.Image, target_w: int, target_h: int) -> Image.Image:
    """
    Recadre l'image au ratio cible en centrant légèrement vers le haut
    (pour ne pas couper le haut des gâteaux qui ont souvent la décoration en haut).
    """
    src_w, src_h = img.size
    target_ratio = target_w / target_h
    src_ratio    = src_w / src_h

    if src_ratio > target_ratio:
        # Image trop large → rogner les côtés
        new_w = int(src_h * target_ratio)
        left  = (src_w - new_w) // 2
        img   = img.crop((left, 0, left + new_w, src_h))
    else:
        # Image trop haute → rogner le bas (garder le haut = la décoration)
        new_h = int(src_w / target_ratio)
        # Centrer légèrement vers le haut : 40 % du haut, 60 % du bas
        top   = int((src_h - new_h) * 0.30)
        img   = img.crop((0, top, src_w, top + new_h))

    return img.resize((target_w, target_h), Image.LANCZOS)


def process_all():
    if not os.path.isdir(INPUT_DIR):
        os.makedirs(INPUT_DIR)
        print(f"📁 Dossier créé : {INPUT_DIR}")
        print("   → Place tes photos dedans (nommées comme dans le MAPPING) puis relance le script.")
        return

    base_out = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
    os.makedirs(os.path.join(base_out, 'gateaux'), exist_ok=True)
    os.makedirs(os.path.join(base_out, 'plats'),   exist_ok=True)

    supported = ('.jpg', '.jpeg', '.png', '.webp', '.heic', '.JPG', '.JPEG', '.PNG')
    files = [f for f in os.listdir(INPUT_DIR) if f.endswith(supported)]

    if not files:
        print("⚠️  Aucun fichier trouvé dans scripts/originaux/")
        return

    ok = 0
    for fname in sorted(files):
        stem = os.path.splitext(fname)[0]
        if stem not in MAPPING:
            print(f"⚠️  '{fname}' — pas dans le MAPPING, ignoré")
            continue

        src_path  = os.path.join(INPUT_DIR, fname)
        rel_out   = MAPPING[stem]
        dest_path = os.path.join(base_out, rel_out)

        try:
            with Image.open(src_path) as img:
                img = ImageOps.exif_transpose(img)       # corrige la rotation EXIF
                img = img.convert('RGB')                  # supprime canal alpha si PNG
                img = smart_crop(img, OUTPUT_W, OUTPUT_H)
                img.save(dest_path, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
                size_kb = os.path.getsize(dest_path) // 1024
                print(f"✅  {fname:40s} → public/images/{rel_out}  ({size_kb} Ko)")
                ok += 1
        except Exception as e:
            print(f"❌  {fname} — erreur : {e}")

    print(f"\n🎂  {ok}/{len(files)} photos traitées avec succès.")
    if ok > 0:
        print("   → Relance  npm run dev  pour voir les photos sur le site.")


if __name__ == '__main__':
    process_all()
