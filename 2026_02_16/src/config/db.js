const mongoose = require("mongoose");

const DB_NAME = "videogames";
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado con al Base de Datos");
  } catch (error) {
    console.log("❌ Error conectando con la Base de Datos", error.message);
  }
};

module.exports = connectDB;
