const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// obtener todos los contactos y crear un nuevo contacto en el formulario
router.get("/contactos", async (req, res) => {
  try {
    const contactos = await prisma.user_contact.findMany(); // Trae todos los registros
    res.json(contactos); // Envía los datos al cliente
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los contactos" });
  }
});

router.post("/creacion", async (req, res) => {
  const { name, email, phone,message } = req.body;

  if (!name || !email || !phone || !message) {
    return res
      .status(400)
      .json({ error: "Faltan datos en el cuerpo de la solicitud" });
  }

  try {
    const nuevoContacto = await prisma.user_contact.create({
      data: { name, email, phone,message },
    });

    res.json({ mensaje: "✅ Contacto creado", contacto: nuevoContacto });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el contacto" });
  }
});

// obtener todos los rodamientos y almacenar cada nuedo rodamiento que se ingresa en medidor

router.get("/bearing",async (req, res) => {
  try {
    const rodamientos = await prisma.bearing.findMany(); // Trae todos los registros
    res.json(rodamientos); // Envía los datos al cliente
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los rodamientos" });
  }
});

router.post("/new_bearing", async (req, res) => {
  const { d__internal, d__external, b__width, code, type } = req.body;

  if (!d__internal || !d__external || !b__width || !code || !type) {
    return res.status(400).json({ error: "Faltan datos para brindar la información" });
  }

  try {
    const nuevoRodamiento = await prisma.bearing.create({
      data: { d__internal, d__external, b__width, code, type }
    });

    res.json({ mensaje: "✅ Rodamiento almacenado", rodamiento: nuevoRodamiento });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el rodamiento" });
  }
});

module.exports = router;
