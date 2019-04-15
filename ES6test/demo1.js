console.log(__dirname) //当前文件路径
const http = require('https');
const fs = require('fs')
const cheerio = require('cheerio')
const options = 'http://www.sysu.edu.cn/2012/cn/jgsz/yx/index.htm';
var  htmlData = ""
const server = http.request(options, res => {
    res.on('data', chunk => {
        htmlData += chunk;
        console.log(htmlData)
    })
    res.on('end', () => {
        const $ = cheerio.load(htmlData);
        const textContent = $("tr").text();
        fs.writeFileSync('./school.txt', textContent, 'utf-8')
    })
})
server.end();