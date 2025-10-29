Animación ASCII: Hombre de Vitruvio (Polichinelas)
Este proyecto es una animación web fluida que muestra al Hombre de Vitruvio de Da Vinci realizando polichinelas (jumping jacks).

La animación está renderizada completamente en arte ASCII y se ejecuta en un navegador web, utilizando CSS para separar la figura del "ruido" de fondo dinámico.

🛠️ Información Técnica
Este proyecto se divide en dos partes:

El Generador (Python):

Un script de Python (generar_multiples_frames.py) usa las librerías Pillow y Numpy para convertir imágenes sprite (pose_1.png, pose_2.png) en múltiples frames de arte ASCII.

Esto se ejecuta una sola vez para generar el texto de la animación.

El Animador (Web):

HTML: Un simple archivo index.html que contiene un elemento <pre> para mostrar el arte ASCII.

CSS: Un archivo style.css que define los colores (verde brillante para la figura, gris oscuro para el fondo) y la fuente monoespaciada, crucial para que el arte no se deforme.

JavaScript: Un archivo animacion.js que contiene:

El texto ASCII de los frames (pegado manualmente).

Un bucle setTimeout para una animación fluida y sin parpadeos.

La lógica para mezclar el frame de la figura con el fondo dinámico.

🚀 Cómo Abrirlo
Este proyecto no requiere un servidor ni dependencias (una vez que los frames han sido generados).

Descarga el Repositorio: Clona o descarga este repositorio como un archivo ZIP.

Navega a la Carpeta: Entra en la carpeta del proyecto (ej. MI_ANIMACION_WEB/).

Abre el Archivo: Simplemente haz doble clic en el archivo index.html.

Se abrirá en tu navegador web por defecto (Chrome, Firefox, Edge, etc.) y la animación comenzará automáticamente.
