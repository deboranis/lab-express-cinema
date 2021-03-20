const express = require('express');
const movies = require('../bin/seeds');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/movies', (req, res, next) => {
    movies.find({}).then((movies) => {
        res.render('movies', {movies})
    })
})

module.exports = router;
