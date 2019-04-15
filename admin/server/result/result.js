exports.createResult = function(success,data){
     var result = {};
     result.message = success;
     result.data = data;
     return result;
}