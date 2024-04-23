const express = require("express");
const {
  createMovie,
  toggleLikeMovie,
  toggleCharacter,
} = require("../controllers/Movie.controllers"); // Importo los controladores
const { isAuth } = require("../../middleware/auth.middleware");
const MovieRoutes = express.Router();

// Defino la ruta para crear una nueva película
MovieRoutes.post("/create", [isAuth], createMovie);

// Defino la ruta para hacer favoritos
MovieRoutes.patch("/like/:idMovie", [isAuth], toggleLikeMovie);
MovieRoutes.patch("/addCharacter/:idMovie", [isAuth], toggleCharacter);

module.exports = MovieRoutes;
