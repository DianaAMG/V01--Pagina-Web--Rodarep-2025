const express = require("express");
const router = express.Router();

// obtener todos los contactos
router.get("/contacto", (req, res) => {
  res.json({ mensaje: "obtener todos los contactos" });
});

// crear un nuevo contacto
router.post("/creacion", (req, res) => {
    const { name, email, phone } = req.body;
    res.json({ mensaje: "Contacto creado" });
  });

module.exports = router;
