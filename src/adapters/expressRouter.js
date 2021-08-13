const adapterRouter = (controller) => {
    return async (request, response) => {
        const httpRequest = {
            query: request.query,
            params: request.params,
            body: request.body,
        };
        const httpResponse = await controller.handle(httpRequest);
        response.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

module.exports = adapterRouter;
