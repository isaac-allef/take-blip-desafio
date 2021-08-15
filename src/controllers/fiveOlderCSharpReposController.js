const { ok, serverError, badRequest } = require("../helpers/httpHelper");

class FiveOlderCSharpReposController {
    constructor(listOlderReposByLangService) {
        this.listOlderReposByLangService = listOlderReposByLangService;
    }

    async handle(httpRequest) {
        try {
            const LANGUAGE = 'C#';
            const MAX_LENGTH = 5;
            const MIN_SEARCH_PAGE_SIZE = 10;
            const { search_page_size } = httpRequest.query;

            if (search_page_size) {
                if (!Number.isInteger(Number(search_page_size))) {
                    return badRequest(new Error('search_page_size must be an integer'));
                }
    
                if (Number(search_page_size) < MIN_SEARCH_PAGE_SIZE) {
                    return badRequest(new Error(`search_page_size must be greater than ${MIN_SEARCH_PAGE_SIZE - 1}`));
                }
            }
    
            const { reposFiltered } = await this.listOlderReposByLangService.execute({ 
                language: LANGUAGE,
                maxLength: MAX_LENGTH,
                search_page_size,
            });
    
            return ok({
                one: reposFiltered[0],
                two: reposFiltered[1],
                three: reposFiltered[2],
                four: reposFiltered[3],
                five: reposFiltered[4],
            });
        } catch (err) {
            return serverError(err);
        }
    }
}

module.exports = FiveOlderCSharpReposController;
