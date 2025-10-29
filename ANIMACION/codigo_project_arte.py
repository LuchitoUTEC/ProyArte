from PIL import Image, ImageOps, ImageEnhance
import numpy as np
import os, sys

nombres_de_imagenes = [
    "pose_1.png",
    "pose_2.png"
]

char_sets = [
    "@%&*+=-:. ",
    "W#&B@$*=-. ",
    "##==--.. "
]

new_width = 120
script_dir = os.path.dirname(os.path.abspath(__file__))

def image_to_ascii(img, chars):
    w, h = img.size
    aspect_ratio = h / w
    new_height = int(aspect_ratio * new_width * 0.55)
    img = img.resize((new_width, max(2, new_height)))
    arr = np.array(img)
    arr = 255 - arr 
    indices = (arr / 255.0 * (len(chars) - 1)).astype(int)
    lines = ["".join(chars[i] for i in row) for row in indices]
    return lines

all_frames_text = []

total_frames = len(nombres_de_imagenes) * len(char_sets)

print(f"--- Iniciando generación de {total_frames} frames ---", file=sys.stderr)
print(f"({len(nombres_de_imagenes)} imágenes x {len(char_sets)} variaciones)", file=sys.stderr)
print(f"Buscando imágenes en la carpeta: {script_dir}", file=sys.stderr)

for img_filename in nombres_de_imagenes:
    try:
        img_path = os.path.join(script_dir, img_filename)
        print(f"Procesando imagen: {img_path} ...", file=sys.stderr)
        
        base_img = Image.open(img_path).convert("L")
        base_img = ImageOps.autocontrast(base_img, cutoff=2)
        
        for i, chars in enumerate(char_sets):
            print(f"  -> Generando variación {i+1} ('{chars}')...", file=sys.stderr)
            
            ascii_lines = image_to_ascii(base_img, chars)
            
            all_frames_text.append("\n".join(ascii_lines))

    except FileNotFoundError:
        print(f"\nERROR: No se pudo encontrar la imagen en '{img_path}'.", file=sys.stderr)
        sys.exit(1) 
    except Exception as e:
        print(f"\nOcurrió un error procesando {img_filename}: {e}", file=sys.stderr)
        sys.exit(1)

print("--- Generación completada ---", file=sys.stderr)

print("\n===FRAME===\n".join(all_frames_text))