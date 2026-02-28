const express = require("express");

const {
  getAllVideogames,
  getVideogameById,
} = require("../controllers/videogames.controllers");

const router = express.Router();

// Especicimos las rutas que disparan los controladores
router.get("/", getAllVideogames);
router.get("/:id", getVideogameById);

module.exports = router;
