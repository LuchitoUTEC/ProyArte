from PIL import Image, ImageOps, ImageEnhance
import numpy as np
import os, time, random

# Ruta de la imagen base
img_path = "Proyecto_Arte.png"  # Debes subir tu imagen con ese nombre al repositorio

# Parámetros de salida
new_width = 120
chars = "@%&*+=-:.#"

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

# Cargar imagen
base_img = Image.open(img_path).convert("L")
base_img = ImageOps.autocontrast(base_img, cutoff=2)

# Crear frames con leves variaciones (simula respiración)
frames = []
for i in range(6):
    factor = 0.9 + 0.2 * abs(np.sin(i * np.pi / 3))  # cambio suave de brillo
    enhancer = ImageEnhance.Brightness(base_img)
    mod_img = enhancer.enhance(factor)
    ascii_lines = image_to_ascii(mod_img)
    frames.append(ascii_lines)

# Función para generar fondo dinámico
def background_line(length):
    symbols = "#*+.- "
    return "".join(random.choice(symbols) for _ in range(length))

# Reproducir la animación
try:
    while True:
        for ascii_lines in frames:
            os.system('cls' if os.name == 'nt' else 'clear')
            for line in ascii_lines:
                bg = background_line(len(line))
                mixed = "".join(
                    ch if ch != " " else bg[j] for j, ch in enumerate(line)
                )
                print(mixed)
            time.sleep(0.4)  # velocidad del movimiento
except KeyboardInterrupt:
    print("\nAnimación finalizada.")
