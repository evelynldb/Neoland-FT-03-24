//! -----------------------------------------------------------------------
//? ------------------------------modelos----------------------------------
//! -----------------------------------------------------------------------
const Movie = require("../models/Movie.model");

//! -----------------------------------------------------------------------------
//? ------------------------------CREAR PELI EN LA DB ---------------------------
//! -----------------------------------------------------------------------------

const createMovie = async (req, res, next) => {
  try {
    // actualizamos los elementos unique del modelo
    await Movie.syncIndexes();
    //con destructuring me cojo las claves que necesito
    const { name, year } = req.body; // lo que vamos a recibir en el body de la req

    //vamos a buscar si la peli ya existe
    const movieExist = await Movie.findOne({ name }, { year });

    if (movieExist) {
      return res.status(409).json({ error: "Esta película ya existe" });
    }
    //no hace falta poner el else porque si no se da la condición, directamente sigue al sgte pto.
    const newMovie = new Movie({ name, year });

    await newMovie.save();

    return res.status(201).json(newMovie);
  } catch (error) {
    next(error);
  }
};

module.exports = { createMovie };
