const badRequest = (error) => {
    return {
        statusCode: 400,
        body: {
            message: error.message,
        },
    };
};

const serverError = (error) => {
    return {
        statusCode: 500,
        body: {
            message: error.message,
        },
    };
};

const ok = (data) => {
    return {
        statusCode: 200,
        body: data,
    };
};

module.exports = {
    badRequest,
    serverError,
    ok,
};
