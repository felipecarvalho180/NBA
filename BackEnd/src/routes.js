const express = require('express');
const teamsController = require('./controllers/teams.controller');

const routes = express.Router();

routes.post('/teams/insert', teamsController.store);
routes.get('/teams', teamsController.index);

module.exports = routes;