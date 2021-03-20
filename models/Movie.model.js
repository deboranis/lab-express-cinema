const { model, Schema } = require("mongoose");
const mongoose = require('mongoose');

const movieSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: [{ type: String }],
    image: { type: String },
    description: { type: String },
    showtimes: [{ type: String }]
});

const Movie = model('Movie', movieSchema);
module.exports = Movie;