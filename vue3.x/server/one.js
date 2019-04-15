const http = require('http');
http.createServer((req, res)=> {
    res.writeHeader(200, {
        'content-type': 'text/html;charset="utf-8"'
    });
    res.write('你好');
    res.end();
}).listen(8888);