const express = require("express");

const {
  getAllVideogames,
  getVideogameById,
  getVideogamesByPlatform,
  createVideogame,
  deleteVideogame,
  updateVideogame,
} = require("../controllers/videogames.controllers");

const router = express.Router();

// Especificamos las rutas que disparan los controladores
router.get("/", getAllVideogames);
router.get("/:id", getVideogameById);
router.get("/platform/:platform", getVideogamesByPlatform);
router.post("/", createVideogame);
router.delete("/:id", deleteVideogame);
router.put("/:id", updateVideogame);

module.exports = router;
