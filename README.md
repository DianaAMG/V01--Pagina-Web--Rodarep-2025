# RODAREP 2025 – Página Web Corporativa

Este repositorio contiene el desarrollo completo (frontend + backend) del sitio web para **Rodarep**, una empresa enfocada en la comercialización de repuestos automotrices.  

---

##  Diseño en Figma

Puedes ver el diseño original del sitio aquí:  
👉 https://www.figma.com/proto/ZxcX2UBdnwNvXjV8BRO55K/Rodarep?node-id=0-1&t=dnPw0GN69Icfhh6E-1

---
## 🖥️ ¿Qué ofrece este proyecto?

- Secciones informativas sobre la empresa.
- Catálogo visual de productos: **rodamientos, retenedores, chumaceras, poleas.**
- Explicación de los servicios.
- Herramienta **"Medidor Rápido de Rodamientos"** para facilitar la búsqueda de piezas.
- Formulario de contacto y ubicación en Google Maps.

---

## 📏 Medidor de Rodamientos

Este módulo está en `medidor.html` y permite:

1. Ingresar medidas del rodamiento:
   - Diámetro interno (d)
   - Diámetro externo (D)
   - Ancho (B)

2. Ver el código estándar del rodamiento.
3. Cotizar directamente por WhatsApp.

##  Estructura del Proyecto
📁 backend → Lógica de servidor, controladores y conexión con base de datos (PostgreSQL).

📁 frontend → Interfaz 
 -/img/ --> Imágenes y fondos

 -/index.html --> Página principal de presentación

 -/index.js --> Código JS para lógica interactiva relacionada con index.html

 -/medidor.html --> Herramienta de cálculo de rodamientos

 -/medidor.js--> Código JS para lógica interactiva relacionada con medidor.html

 -/styles.css --> Estilos principales del sitio

## 🔧 Tecnologías utilizadas

### Frontend:
- HTML5, CSS3, JavaScript
- Conexión a API REST

### Backend:
- Node.js + Express
- PostgreSQL
- Controladores REST para manejo de datos
---

## 🔌 Funcionalidad clave

- Conexión entre frontend y backend
- CRUD básico conectado a base de datos
---

## se puede ejecutar el proyecto localmente

**1.Arrancar el backend con servidor hecho con Node.js (Express)**
- Descargar o clonar el repositorio
- inicializamos con el comando 
  ```bash
  npm install
  ```
  
  

- Ejecutamos el script con el comando

```bash
npm run dev
```
  


-En estos pasos tenemos ya corriendo en local, el puero elegido el proyecto y en consola debe mostrar el mensaje **Servidor escuchando en http://localhost:3000**

-El navegador muestra el mensaje en jason **{"mensaje":"Bienvenido a Rodarep"}**.
  

## estado del proyecto
✅ Conexión front-back
✅ Integración con base de datos
🚧Actualmente el proyecto se encuentra en fase de desarrollo visual de los componentes finales y en la integración con una funcionalidad de e-commerce
para la sección de portafolio. 

Desarrollado con dedicación por Diana Alejandra Monroy García.






