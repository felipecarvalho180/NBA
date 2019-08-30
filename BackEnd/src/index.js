const express = require('express');
const mongoose = require('mongoose')

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://felipe:123@omnistack-pn9zh.mongodb.net/nba2k19?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json()); 
server.use(routes);

server.listen(3000);