const { Router } = require('express');

const routes = Router();
const expressRouter = require('../adapters/expressRouter');
const makeFiveOlderCSharpReposController = require('../factories/makeFiveOlderCSharpReposController');

routes.get('/fiveOlderCSharpRepos', expressRouter(makeFiveOlderCSharpReposController()));

module.exports = routes;
