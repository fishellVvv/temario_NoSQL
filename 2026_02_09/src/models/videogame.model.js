const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videogameSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: false },
    cover: { type: String, required: false },
    category: {
      type: String,
      enum: ["Action", "Adventure", "RPG", "Strategy", "Sports"],
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Videogame = mongoose.model("Videogame", videogameSchema);

module.exports = Videogame;
