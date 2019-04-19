module.exports = {
    errorResult: (message, code) => {
        const result = {}
        result.message = message;
        result.code = code;
        return result
    },
    successResult: (message, code, data) => {
        const result = {}
        result.message = message;
        result.code = code;
        result.data = data;
        return result
    }
}