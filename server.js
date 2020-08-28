const express = require('express');

const RecipesRouter = require('./recipes/recipes-routers');

const server = express();

server.use(express.json());
server.use('/api/recipe', RecipesRouter);

module.exports = server;