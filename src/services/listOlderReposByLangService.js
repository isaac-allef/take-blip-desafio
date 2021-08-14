const axios = require('axios');

class ListOlderReposByLangService {
    async execute({ language='C#', maxLength=5, search_page_size=20 }) {
        let page = 1;
        let reposFiltered = [];

        while (reposFiltered.length < maxLength) {
            const repositories = await this.getListRepositories(page, search_page_size);

            if (repositories.length === 0) {
                break;
            }
    
            reposFiltered = [...reposFiltered, ...repositories.filter(repo => {
                return repo.language === language;
            })];

            page += 1;
        }
        
        reposFiltered = reposFiltered.slice(0, maxLength);

        return {
            language,
            maxLength,
            reposFiltered,
        };
    }

    async getListRepositories(page=1, per_page=20) {
        const sort = 'created';
        const direction = 'asc';
        
        const URL = `https://api.github.com/orgs/takenet/repos?sort=${sort}&direction=${direction}&page=${page}&per_page=${per_page}`;

        const response = await axios.get(URL);

        return response.data;
    }
}

module.exports = ListOlderReposByLangService;
