const { Router } = require('express');

const routes = Router();
const expressRouter = require('../adapters/expressRouter');
const makeListOlderReposController = require('../factories/makeListOlderReposController');

routes.get('/olderRepos', expressRouter(makeListOlderReposController()));

module.exports = routes;
