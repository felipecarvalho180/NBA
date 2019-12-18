const express = require('express');
const teamsController = require('./controllers/teams.controller');
const playersController = require('./controllers/players.controller');

const routes = express.Router();

//teams
routes.post('/teams/insert', teamsController.store);
routes.get('/teams', teamsController.index);

//players
routes.get('/players/picture', playersController.getImages);

module.exports = routes;