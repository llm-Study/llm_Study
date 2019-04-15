const buf = new Buffer('李黎明');
console.log(buf)
console.log(buf.toString('utf-8'))
const arr = new Uint16Array(2);
var arr1 = Buffer.from(arr)
console.log(arr1)