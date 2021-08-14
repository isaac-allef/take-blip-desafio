const ListOlderReposByLangService = require('../services/listOlderReposByLangService');
const FiveOlderCSharpReposController = require('../controllers/fiveOlderCSharpReposController');

const makeFiveOlderCSharpReposController = () => {
    const listOlderReposByLangService = new ListOlderReposByLangService();
    return new FiveOlderCSharpReposController(listOlderReposByLangService);
}

module.exports = makeFiveOlderCSharpReposController;
