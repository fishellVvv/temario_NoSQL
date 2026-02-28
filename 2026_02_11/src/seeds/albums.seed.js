const mongoose = require("mongoose");

const Album = require("../models/album.model");

// Esto son datos en un array de objetos corriente
const discos = [
  {
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "Heavy Metal",
  },
  {
    title: "Paranoid",
    artist: "Black Sabbath",
    year: 1970,
    genre: "Heavy Metal",
  },
  {
    title: "The Number of the Beast",
    artist: "Iron Maiden",
    year: 1982,
    genre: "Heavy Metal",
  },
  {
    title: "Painkiller",
    artist: "Judas Priest",
    year: 1990,
    genre: "Heavy Metal",
  },
  {
    title: "Rust in Peace",
    artist: "Megadeth",
    year: 1990,
    genre: "Thrash Metal",
  },
  {
    title: "Reign in Blood",
    artist: "Slayer",
    year: 1986,
    genre: "Thrash Metal",
  },
  {
    title: "Among the Living",
    artist: "Anthrax",
    year: 1987,
    genre: "Thrash Metal",
  },
  {
    title: "Bonded by Blood",
    artist: "Exodus",
    year: 1985,
    genre: "Thrash Metal",
  },
  { title: "Arise", artist: "Sepultura", year: 1991, genre: "Thrash Metal" },
  {
    title: "Pleasure to Kill",
    artist: "Kreator",
    year: 1986,
    genre: "Thrash Metal",
  },

  { title: "Black Metal", artist: "Venom", year: 1982, genre: "Black Metal" },
  {
    title: "Under the Sign of the Black Mark",
    artist: "Bathory",
    year: 1987,
    genre: "Black Metal",
  },
  {
    title: "De Mysteriis Dom Sathanas",
    artist: "Mayhem",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "In the Nightside Eclipse",
    artist: "Emperor",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "Hvis Lyset Tar Oss",
    artist: "Burzum",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "Transilvanian Hunger",
    artist: "Darkthrone",
    year: 1994,
    genre: "Black Metal",
  },
  {
    title: "Bergtatt – Et Eeventyr i 5 Capitler",
    artist: "Ulver",
    year: 1995,
    genre: "Black Metal",
  },
  {
    title: "Anthems to the Welkin at Dusk",
    artist: "Emperor",
    year: 1997,
    genre: "Black Metal",
  },
  {
    title: "Enthrone Darkness Triumphant",
    artist: "Dimmu Borgir",
    year: 1997,
    genre: "Black Metal",
  },
  {
    title: "Nemesis Divina",
    artist: "Satyricon",
    year: 1996,
    genre: "Black Metal",
  },

  {
    title: "Seventh Son of a Seventh Son",
    artist: "Iron Maiden",
    year: 1988,
    genre: "Heavy Metal",
  },
  {
    title: "Heaven and Hell",
    artist: "Black Sabbath",
    year: 1980,
    genre: "Heavy Metal",
  },
  { title: "Holy Diver", artist: "Dio", year: 1983, genre: "Heavy Metal" },
  {
    title: "Ace of Spades",
    artist: "Motörhead",
    year: 1980,
    genre: "Heavy Metal",
  },
  {
    title: "Screaming for Vengeance",
    artist: "Judas Priest",
    year: 1982,
    genre: "Heavy Metal",
  },
  {
    title: "Ride the Lightning",
    artist: "Metallica",
    year: 1984,
    genre: "Heavy Metal",
  },
  {
    title: "Powerslave",
    artist: "Iron Maiden",
    year: 1984,
    genre: "Heavy Metal",
  },
  {
    title: "Blizzard of Ozz",
    artist: "Ozzy Osbourne",
    year: 1980,
    genre: "Heavy Metal",
  },
  {
    title: "Kill 'Em All",
    artist: "Metallica",
    year: 1983,
    genre: "Thrash Metal",
  },
  {
    title: "Peace Sells... but Who's Buying?",
    artist: "Megadeth",
    year: 1986,
    genre: "Thrash Metal",
  },

  {
    title: "South of Heaven",
    artist: "Slayer",
    year: 1988,
    genre: "Thrash Metal",
  },
  {
    title: "Practice What You Preach",
    artist: "Testament",
    year: 1989,
    genre: "Thrash Metal",
  },
  {
    title: "The New Order",
    artist: "Testament",
    year: 1988,
    genre: "Thrash Metal",
  },
  {
    title: "Fabulous Disaster",
    artist: "Exodus",
    year: 1989,
    genre: "Thrash Metal",
  },
  {
    title: "Schizophrenia",
    artist: "Sepultura",
    year: 1987,
    genre: "Thrash Metal",
  },

  {
    title: "The Somberlain",
    artist: "Dissection",
    year: 1993,
    genre: "Black Metal",
  },
  {
    title: "Storm of the Light's Bane",
    artist: "Dissection",
    year: 1995,
    genre: "Black Metal",
  },
  {
    title: "Blood Fire Death",
    artist: "Bathory",
    year: 1988,
    genre: "Black Metal",
  },
  {
    title: "Panzerfaust",
    artist: "Darkthrone",
    year: 1995,
    genre: "Black Metal",
  },
  {
    title: "At the Heart of Winter",
    artist: "Immortal",
    year: 1999,
    genre: "Black Metal",
  },
];

// Vamos a convertir todos los discos en instacias de Album (modelo de Mongoose)
const discoToAlbum = discos.map((disco) => new Album(disco));

// Vamos a c0onectarnos temporalmente a nuestro servidor local de la base de datos
mongoose
  .connect("mongodb://localhost:27017/musicdb")
  .then(async () => {
    // Utilizando el método find de mongo, vamos a comprobar si tenemos un array de discos en la base de datos
    const allAlbums = await Album.find();

    // Comprobamos si en nuestra base de datos ya existen estos albums
    if (allAlbums.length) {
      // Si encuentra albums en la base de datos los borramos todos, si no hay albums no hace nada
      await Album.collection.drop();
    }
  })
  .catch((error) => console.error("Error borrando los albums:", error))
  .then(async () => {
    // Insertamos todos los albums en la coleccion correspondiente al modelo Album
    await Album.insertMany(discoToAlbum);
  })
  .catch((error) => console.error("Error insertando los albums:", error))
  // Por seguridas, al terminar todo, haya o no error, desconectamos de la base de datos
  .finally(() => {
    mongoose.disconnect();
  });
