from PIL import Image, ImageOps, ImageEnhance
import numpy as np
import os, sys

# Ruta de la imagen base
img_path =os.path.join(os.path.dirname(__file__), "Proyecto_Arte.png")
new_width = 120
chars = "@%&*+=-:. " # Importante: terminado en espacio

# Función para convertir imagen a ASCII
def image_to_ascii(img):
    w, h = img.size
    aspect_ratio = h / w
    new_height = int(aspect_ratio * new_width * 0.55)
    img = img.resize((new_width, max(2, new_height)))
    arr = np.array(img)
    indices = (arr / 255.0 * (len(chars) - 1)).astype(int)
    lines = ["".join(chars[i] for i in row) for row in indices]
    return lines

try:
    base_img = Image.open(img_path).convert("L")
    base_img = ImageOps.autocontrast(base_img, cutoff=2)
except FileNotFoundError:
    print(f"Error: No se pudo encontrar el archivo '{img_path}'.", file=sys.stderr)
    exit()

# Crear frames con leves variaciones
frames = []
for i in range(6): # Genera los 6 frames de "respiración"
    factor = 0.9 + 0.2 * abs(np.sin(i * np.pi / 3))
    enhancer = ImageEnhance.Brightness(base_img)
    mod_img = enhancer.enhance(factor)
    ascii_lines = image_to_ascii(mod_img)
    frames.append(ascii_lines)

# --- IMPRIMIR TODOS LOS FRAMES A LA CONSOLA ---
# Usamos "===FRAME===" como separador que JS puede entender
for i, frame in enumerate(frames):
    for line in frame:
        print(line)
    if i < len(frames) - 1:
        print("===FRAME===")