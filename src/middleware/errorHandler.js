const { constants } = ('../constants.js');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    //   If res.statusCode exists and is truthy, use its value for statusCode; otherwise, set statusCode to 500.
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: 'Validation failed',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.NOT_FOUND:
            res.json({
                title: 'Not found',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            res.json({
                title: 'Server error',
                message: err.message,
                stackTrace: err.stack
            });
        default:
            console.log('No Error');
            break;
    }
};


module.exports = errorHandler;