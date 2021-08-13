const ListOlderReposService = require('../services/listOlderReposService');
const ListOlderReposController = require('../controllers/listOlderReposController');

const makeListOlderReposController = () => {
    const listOlderReposService = new ListOlderReposService();
    return new ListOlderReposController(listOlderReposService);
}

module.exports = makeListOlderReposController;
