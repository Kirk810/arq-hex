const express = require('express');
const router = express.Router();
const movies = require('../domain/services/service-movie');
const shows = require('../domain/services/service-show');

router.get('/movies', movies.getAll);
router.post('/movies', movies.Create);
router.get('/shows', shows.getAll);
router.post('/shows', shows.Create);

module.exports = router;