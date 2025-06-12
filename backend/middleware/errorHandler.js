const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const status = err.status || constants.SERVER_ERROR;
    const message = err.message || "Something went wrong";
    switch(status){
        case constants.VALIDATION_ERROR:
            return res.status(status).json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
        case constants.UNAUTHORIZED_ERROR:
            return res.status(status).json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
        case constants.FORBIDDEN_ERROR:
            return res.status(status).json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
        case constants.NOT_FOUND_ERROR:
            return res.status(status).json({ title: "Not Found", message: err.message, stackTrace: err.stack });
        case constants.SERVER_ERROR:
            return res.status(status).json({ title: "Server Error", message: err.message, stackTrace: err.stack });
        default:
            return res.status(status).json({ title: "Server Error", message: err.message, stackTrace: err.stack });
        }
};

module.exports = errorHandler;