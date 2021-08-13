class ListOlderReposController {
    constructor(listOlderReposService) {
        this.listOlderReposService = listOlderReposService;
    }

    async handle(httpRequest) {
        const { listLength } = httpRequest.query;
        let { language } = httpRequest.query;
        
        if (language && language.toUpperCase() === 'CSHARP') {
            language = 'C#';
        }

        const listOlderRepos = await this.listOlderReposService.execute(language, listLength);

        return {
            statusCode: 200,
            body: listOlderRepos,
        }
    }
}

module.exports = ListOlderReposController;
