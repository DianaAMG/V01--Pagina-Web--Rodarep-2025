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
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res
      .status(400)
      .json({ error: "Faltan datos en el cuerpo de la solicitud" });
  }

  try {
    const nuevoContacto = await prisma.user_contact.create({
      data: { name, email, phone },
    });

    res.json({ mensaje: "✅ Contacto creado", contacto: nuevoContacto });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el contacto" });
  }
});

module.exports = router;
