const express = require("express");
const MovieRoutes = express.Router();

// Importar el controlador
const { createMovie } = require("../controllers/Movie.controllers");

// Definir la ruta para crear una nueva película
MovieRoutes.post("/movies", createMovie);

module.exports = MovieRoutes;
