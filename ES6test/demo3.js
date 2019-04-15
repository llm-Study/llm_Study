const fs = require('fs')
//文件操作(查看文件信息)
fs.stat('./xml/360.xml', (err, stats) => {
    console.log(stats.isFile()) //判斷是否為文件   false
    console.log(stats.isDirectory()) //判斷是否為文件夾  true
});
//同步寫法
var path = fs.realpathSync('./xml/360.xml') 
console.log('文件的絕對路徑為' + path);
//異步寫法
fs.realpath('./xml/360.xml', (err, stats) => {
    console.log('文件的絕對路徑為' + stats)
})
fs.open('./xml/360.xml','r',(err,fd)=>{
    console.log(fd)
})