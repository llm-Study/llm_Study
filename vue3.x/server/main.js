function say(word){
    console.log(word)
}
function date(someFunction,value){
    someFunction(value)
}
//将say作为参数进行传递,say变成date的本地变量someFunction
date(say,'Hello')
//匿名函数传递
function date1(someFunction,value){
       someFunction(value);
}
date1((word)=>{console.log(word)},'hello')