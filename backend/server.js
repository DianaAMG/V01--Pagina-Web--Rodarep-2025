//  Importar los módulos necesarios
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const userContactRoutes = require("./routes/user.contact.routes"); // Importar las rutas de contacto de usuario

// Inicializar la aplicación de Express
const app = express();

// Definir el puerto donde correrá el servidor
const port = 3000;

// Usar middleware para que el servidor pueda entender datos JSON y manejar CORS
app.use(cors({ origin: "http://127.0.0.1:5500" })); // Permite peticiones desde otros orígenes (como tu frontend)
app.use(morgan("dev")); // Middleware para registrar las peticiones HTTP en la consola
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones a JSON

// Rutas
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenido a Rodarep" });
});


// Rutas de nuestro servidor
app.use("/", userContactRoutes); // Usar las rutas de contacto de usuario


// Solo iniciar el servidor si NO estamos en modo prueba
if (process.env.NODE_ENV !== "test") {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

// Exportar la app para usarla en pruebas con Supertest
module.exports = app;