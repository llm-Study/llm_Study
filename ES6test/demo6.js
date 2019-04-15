//集群
const cluster = require('cluster');
const htpp = require('http');
const numCPUs = require('os').cpus().length;
// cluster.isMaster = true
if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker}+${code}+${signal}`)
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    })
} else {
    htpp.createServer((req,res)=>{
        res.writeHead(200);
        res.end('1111\n')
    }).listen(8000)
    console.log(`工作进程 ${process.pid} 已启动`);
}