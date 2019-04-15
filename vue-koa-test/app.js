const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.write('你好')
    res.end();
}).listen(3000)