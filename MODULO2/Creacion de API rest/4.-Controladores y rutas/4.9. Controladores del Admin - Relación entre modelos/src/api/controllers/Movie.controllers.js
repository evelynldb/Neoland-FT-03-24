const Character = require("../models/Character.model");
const Chat = require("../models/Chat.model");
const Menssage = require("../models/Message.model");
const Movie = require("../models/Movie.model");
const User = require("../models/User.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++-------C R U D--------+++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

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

//! -----------------------------------------------------------------------------
//? -------------------------------AÑADIR FAVORITO-------------------------------
//! -----------------------------------------------------------------------------

const toggleLikeMovie = async (req, res, next) => {
  try {
    const { idMovie } = req.params;
    // vamos a tener el middleware de auth por lo cual se crea req.user
    const { _id } = req.user;

    if (req.user.moviesFav.includes(idMovie)) {
      try {
        await User.findByIdAndUpdate(_id, {
          $pull: { moviesFav: idMovie },
        });

        try {
          await Movie.findByIdAndUpdate(idMovie, {
            $pull: { likes: _id },
          });

          return res.status(200).json({
            action: "disliked",
            user: await User.findById(_id).populate("moviesFav"),
            movie: await Movie.findById(idMovie).populate("likes"),
          });
        } catch (error) {
          return res.status(404).json({
            error: "no update movie - likes",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "no update user-  moviesFav",
          message: error.message,
        });
      }
    } else {
      try {
        await User.findByIdAndUpdate(_id, {
          $push: { moviesFav: idMovie },
        });

        try {
          await Movie.findByIdAndUpdate(idMovie, {
            $push: { likes: _id },
          });

          return res.status(200).json({
            action: "like",
            user: await User.findById(_id).populate("moviesFav"),
            movie: await Movie.findById(idMovie).populate("likes"),
          });
        } catch (error) {
          return res.status(404).json({
            error: "no update movie - likes",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "no update user-  moviesFav",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { toggleLikeMovie, createMovie };
