// 1. Importar los módulos necesarios
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const userContactRoutes = require('./routes/user.contact.routes'); // Importar las rutas de contacto de usuario



// 2. Inicializar la aplicación de Express
const app = express();


// 3. Definir el puerto donde correrá el servidor
const port = 3000;

// 4. Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// 5. Crear una ruta de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenido a Rodarep" });
});

// rutas de nuestro servidor
app.use("/", userContactRoutes); // Usar las rutas de contacto de usuario

// 6. Usar middleware para que el servidor pueda entender datos JSON y manejar CORS
app.use(morgan("dev")); // Middleware para registrar las peticiones HTTP en la consola
app.use(cors({origin: 'http://localhost:4200'})); // Permite peticiones desde otros orígenes (como tu frontend)
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones a JSON
app.use(bodyParser.json()); // Permite recibir datos en formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // Permite datos codificados en URLs (formulario HTML)

