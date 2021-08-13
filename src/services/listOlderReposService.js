const axios = require('axios');

class ListOlderReposService {
    async execute(language='C#', listLength=5) {
        const PER_PAGE = 20;
        let page = 1;
        let repositoriesCSharp = [];

        while (repositoriesCSharp.length < listLength) {
            const repositories = await this.getListRepositories(page, PER_PAGE);

            if (repositories.length === 0) {
                break;
            }
    
            repositoriesCSharp = [...repositoriesCSharp, ...repositories.filter(repo => {
                return repo.language === language;
            })];

            page += 1;
        }
        
        const firstFiveReposCSharp = repositoriesCSharp.slice(0, listLength);

        return firstFiveReposCSharp;
    }

    async getListRepositories(page=1, per_page=20) {
        const sort = 'created';
        const direction = 'asc';
        
        const URL = `https://api.github.com/orgs/takenet/repos?sort=${sort}&direction=${direction}&page=${page}&per_page=${per_page}`;

        const response = await axios.get(URL);

        return response.data;
    }
}

module.exports = ListOlderReposService;
