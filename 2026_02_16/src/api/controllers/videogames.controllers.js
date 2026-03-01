const Videogame = require("../models/videogame.model");

// Obtener todos los videojuegos
const getAllVideogames = async (req, res) => {
  try {
    const videogames = await Videogame.find();
    return res.status(200).json({
      total_videogames: await Videogame.countDocuments(),
      results: videogames,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Obtener un videojuego por su ID
const getVideogameById = async (req, res) => {
  const { id } = req.params;
  try {
    const videogame = await Videogame.findById(id);
    if (!videogame) {
      return res
        .status(404)
        .json("No se encuentra el videojuego con el ID proporcionado");
    }
    return res.status(200).json(videogame);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Obtener videojuegos por plataforma
const getVideogamesByPlatform = async (req, res) => {
  const { platform } = req.params;
  try {
    const videogames = await Videogame.find({ platform: platform });
    return res.status(200).json(videogames);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Crear un videojuego nuevo
const createVideogame = async (req, res) => {
  try {
    const newVideogame = new Videogame(req.body);
    const createdVideogame = await newVideogame.save();
    return res.status(201).json(createdVideogame);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Borrar un videojuego por su ID
const deleteVideogame = async (req, res) => {
  const { id } = req.params;
  try {
    const videogame = await Videogame.findByIdAndDelete(id);
    if (!videogame) {
      return res.status(404).json({ message: "Videogame not found" });
    }
    return res.status(204).json({ message: "Videogame deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Actualizar un videojuego por su ID
const updateVideogame = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Videogame.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Videogame not found" });
    }
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  getVideogamesByPlatform,
  createVideogame,
  deleteVideogame,
  updateVideogame,
};
