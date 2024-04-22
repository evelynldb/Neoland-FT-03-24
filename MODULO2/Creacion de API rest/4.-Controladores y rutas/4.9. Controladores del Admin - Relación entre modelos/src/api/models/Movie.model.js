const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  //aquí es donde yo defino los datos que quiero que haya en la bd. es el modelo

  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menssage" }],
    //owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
