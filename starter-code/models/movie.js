const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {type: String},
  genre: {type: String},
  plot: {type: String}
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
