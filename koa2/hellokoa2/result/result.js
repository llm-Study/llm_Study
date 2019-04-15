exports.createResult = function (success, data) {
    let result = {};
    result.message = success;
    result.data = data;
    return result
}