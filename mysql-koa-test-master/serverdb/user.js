const request = require('./dbFn')
request.sql("select cartoon_id as comic_id,cartoon_name as comic_name from cartoon(nolock) where cartoon_id in (25934,25933,7119) and show_type>0 and (copyright_desc is null or copyright_desc='')", (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})
module.exports = request;