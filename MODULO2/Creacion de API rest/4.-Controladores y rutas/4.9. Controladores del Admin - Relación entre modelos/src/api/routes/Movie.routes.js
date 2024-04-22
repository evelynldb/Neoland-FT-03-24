const express = require("express");
const {
  createMovie,
  toggleLikeMovie,
} = require("../controllers/Movie.controllers"); // Importo los controladores
const { isAuth } = require("../../middleware/auth.middleware");
const MovieRoutes = express.Router();

// Defino la ruta para crear una nueva película
MovieRoutes.post("/movies", createMovie);

// Defino la ruta para hacer favoritos
MovieRoutes.patch("/like/:idMovie", [isAuth], toggleLikeMovie);

module.exports = MovieRoutes;
