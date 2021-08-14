class ListOlderReposController {
    constructor(listOlderReposService) {
        this.listOlderReposService = listOlderReposService;
    }

    async handle(httpRequest) {
        const { maxLength } = httpRequest.query;
        let { language } = httpRequest.query;
        
        if (language && language.toUpperCase() === 'CSHARP') {
            language = 'C#';
        }

        const listOlderRepos = await this.listOlderReposService.execute(language, maxLength);

        return {
            statusCode: 200,
            body: listOlderRepos,
        }
    }
}

module.exports = ListOlderReposController;
