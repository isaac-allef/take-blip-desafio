const FiveOlderCSharpReposController = require("../src/controllers/fiveOlderCSharpReposController");
const ListOlderReposByLangService = require("../src/services/listOlderReposByLangService");

const makeFakeRequest = () => ({
    query: {
        search_page_size: 20,
    },
});

const makeSut = () => {
    const listOlderReposByLangService = new ListOlderReposByLangService();
    const sut = new FiveOlderCSharpReposController(listOlderReposByLangService);
    return {
        sut,
        listOlderReposByLangService,
    };
};

describe('Five Older CSharp Repos Controller', () => {
    test('Should return 400 if search_page_size is not an integer', async () => {
        const { sut } = makeSut();
        const httpRequest = {
            query: {
                search_page_size: '20.1',
            },
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual({ message: 'search_page_size must be an integer' });
    });

    test('Should return 400 if search_page_size is not greater than 9', async () => {
        const { sut } = makeSut();
        const httpRequest = {
            query: {
                search_page_size: -5,
            },
        };
        const httpResponse = await sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
        expect(httpResponse.body).toEqual({ message: 'search_page_size must be greater than 9' });
    });

    test('Should call ListOlderReposByLangService with corret values', async () => {
        const { sut, listOlderReposByLangService } = makeSut();
        listSpy = jest.spyOn(
            listOlderReposByLangService,
            'execute',
        );

        const httpRequest = makeFakeRequest();
        await sut.handle(httpRequest);
        expect(listSpy).toHaveBeenCalledWith({
            language: 'C#',
            maxLength: 5,
            search_page_size: httpRequest.query.search_page_size,
        });

        await sut.handle({
            query: {
                search_page_size: undefined,
            },
        });
        expect(listSpy).toHaveBeenCalledWith({
            language: 'C#',
            maxLength: 5,
            search_page_size: undefined,
        });
    });

    test('Should return 500 if ListOlderReposByLangService throws', async () => {
        const { sut, listOlderReposByLangService } = makeSut();
        jest.spyOn(
            listOlderReposByLangService,
            'execute',
        ).mockImplementationOnce(() => {
            throw new Error('any message error');
        });
        const httpResponse = await sut.handle(makeFakeRequest());
        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.body).toEqual({ message: 'any message error' });
    });
});