# 🚀 Playwright + Asistente IA: Ejecución de tests automatizados usando lenguaje natural

En esta demo que desarrollé, combiné varias tecnologías para crear una experiencia de testing más intuitiva y poderosa:

- 🧠 **Frontend en React** con un chatbot que interpreta instrucciones en lenguaje natural (por ejemplo: `"ejecuta la prueba de login"`).
- 🔧 **Backend en Node.js**, que recibe la solicitud y, mediante un **Model Context Protocol (MCP)**, recorre los archivos de prueba, analiza su contenido y utiliza **Inteligencia Artificial (IA)** para identificar cuál test se ajusta mejor a lo que el usuario pidió.
- 🧪 El test se ejecuta automáticamente usando **Playwright**, y el resultado se interpreta con IA para devolver un mensaje claro y entendible, sin necesidad de revisar logs técnicos.

## 🎯 Objetivo

Hacer que la automatización de pruebas sea más accesible, rápida y colaborativa, incluso para quienes no tienen conocimientos técnicos.

## 🚧 Instalación y uso

### Backend

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

Esto levantará el servidor backend en `http://localhost:4000`.

3. En la raíz del proyecto, crea un archivo `.env` con las siguientes variables:

```env
GEMINI_API_KEY=tu_clave_api (Lo puedes generar desde aquí: https://aistudio.google.com/apikey)
GEMINI_API_URL=la_url_de_tu_api (Ejemplo: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent)
```

> Asegúrate de tener estas credenciales válidas para que la IA funcione correctamente.

---

### Frontend

1. Desde la raíz del proyecto, navega a la carpeta `frontend`:

```bash
cd frontend
```

2. En la raíz de la carpeta `frontend`, crea un archivo `.env` con las siguientes variables para que se pueda establecer conexión con el backend:

```env
VITE_API_URL=http://localhost
VITE_API_PORT=4000
```

3. Luego instala las dependencias y ejecuta el servidor:

```bash
npm install
npm run dev
```

Esto abrirá el frontend en tu navegador en la URL que indique React (usualmente `http://localhost:5173` o similar).
---

## 💡 Notas

- Esta es una **demo básica**, diseñada para mostrar el potencial de integrar lenguaje natural con automatización de pruebas.
- Para esta demo utilicé la **API de Gemini**, pero puedes cambiarla o incluso incluir modelos locales (oLlama, LMSTudio)
- La estructura del código es intencionadamente simple, para que puedas adaptarla fácilmente o dejar volar tu imaginación en nuevas implementaciones.
- Me encuentro desarrollando nuevas funcionalidades y refactorizaciones 

## 🙏 Agradecimientos y contacto

Gracias por tomarte el tiempo de revisar este proyecto.  
Si deseas conversar conmigo e intercambiar ideas sobre el uso de la IA en procesos de testing, estoy completamente disponible.  
**Cualquier aporte, sugerencia o mejora es más que bienvenida.**

- 📧 **Correo:** [eduardonavarro.test@gmail.com](mailto:eduardonavarro.test@gmail.com)  
- 📞 **Teléfono:** +57 300 124 4352



