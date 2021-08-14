class FiveOlderCSharpReposController {
    constructor(olderReposByLanguageService) {
        this.olderReposByLanguageService = olderReposByLanguageService;
    }

    async handle(httpRequest) {
        const LANGUAGE = 'C#';
        const MAX_LENGTH = 5;
        const { search_page_size } = httpRequest.query;

        const { reposFiltered } = await this.olderReposByLanguageService.execute({ 
            language: LANGUAGE,
            maxLength: MAX_LENGTH,
            search_page_size,
        });

        return {
            statusCode: 200,
            body: {
                one: reposFiltered[0],
                two: reposFiltered[1],
                three: reposFiltered[2],
                four: reposFiltered[3],
                five: reposFiltered[4],
            },
        }
    }
}

module.exports = FiveOlderCSharpReposController;
