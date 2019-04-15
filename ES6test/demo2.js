/**
 * 文件递归
 */
const fs = require('fs')
const path = require('path')
const filepath = path.resolve('../../fs_test');
//文件递归方法
fileDisplay(filepath)

function fileDisplay(filepath) {
    fs.readdir(filepath, (err, files) => {
        if (err) console.log(err)
        files.forEach(item => {
            //获取文件的绝对路径
            const fileChildPath = path.join(filepath, item)
            fs.stat(fileChildPath, (err, stats) => {
                if (err) console.log(err)
                const file = stats.isFile(); //判断是否为文件
                const files = stats.isDirectory(); //判断是否为文件夹
                if (file) {
                    const Content = fs.readFileSync(fileChildPath, 'utf-8') //打印文件
                    console.log(Content)
                } else if (files) {
                    fileDisplay(fileChildPath); //如果文件夹里面依然存在文件,再次执行这个方法
                }
            })
        });
    })
}