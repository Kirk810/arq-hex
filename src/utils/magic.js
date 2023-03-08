const enum_ = require('./enum');

exports.ResponsiveService = async (status, errorCode, message, data) => {
    return await {
        status: status,
        info: { errorCode: errorCode, message: message, data: data },
    };
};

exports.logSuccess = (msg) => {
    console.log(enum_.GREEN_LOG, msg);
};
exports.logInfo = (msg) => {
    console.log(enum_.CYAN_LOG, msg);
};
exports.logWarning = (msg) => {
    console.log(enum_.YELLOW_LOG, msg);
};
exports.logDanger = (msg) => {
    console.log(enum_.RED_LOG, msg);
};