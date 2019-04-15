## nodejs

```
主线程是单线程(异步)callback.将后续的逻辑写成函数,传入当前执行的函数中,当执行的函数得到结果后,执行传入函数(回调函数)
```


```
console.log()/info/warn/error/time/timeEnd
process 进程
Buffer 缓存区
clearImmediate setImmediate
clearTimeout
```

### 第三方模块
- 通过npm来进行安装 
```
npm root nrm -g //不会自动加入环境变量,而是通过npm进行映
nrm ls  显示所有的可用源
npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
  

npm install nrm -g
切换默认下载源
nrm use cnpm  ->切换至中国的下载源
```
### 12月16日所学
- 1.链式引用
```
var o1 = {};
var o2 = {
  name:'小李'
}
o1.name1 = o2
//输出o1.name1.name,结果为小李
```
- 2.arguments(可以不规定形参,随意用户传入多少个参数)
```
function args(a){
  for(let i = 0;i<arguments.length;i++){
    var arrage = Array.prototype.slice.call(arguments)
    //这里将arguments转换为真正的数组
  }
  console.log(arrage)
}
args(1,2,3,4)这里输出为[1,2,3,4]
```
- 3.闭包
```
第一种写法
function fn1(){
   var name = '小李';
   return function fn2(){
       console.log(name)
   }
}
var fn3 = fn1();
fn3();
第二种写法
var f1 = (function(){
    var name = '小李';
    return name
}())
console.log(f1)
```
- 4.判断数据类型(比typeof更加准确)
```
var arr = [1,2,3];
var str = '123'
var type = function(o){
    var s = Object.prototype.toString.call(o);
    //Object.prototype.toString可以看出传入的参数到底是什么类型
    return s.match(/\[Object .*?\]/)[1].toLowerCase();
    //返回值把第一位数转换为小写
}
console.log(type(arr))
//输出结果为array
console.log(type(str))
//输出结果为string
```
- 5.call(),apply(),bind()的区别
```
var obj1 = {
  name:'小李',
  age:22,
  myFun(){
    console.log(this.name+';'+this.age)
  }
}
var obj2 = {
    name:'小王',
    age:18
}
//call将这里的this指向为obj2,myFun里面指向为obj2的name,  输出为 小王;18     tips:可以加参数   obj1.myFun.call(obj2,'四川','重庆',....);
obj1.myFun.call(obj2);
//apply同理,指向为obj2, 输出为 小王;18 tips:需要注意的是  apply需要传入的参数必须以数组的形式,例如:  obj1.myFun.apply(obj2,['四川','重庆'],[...]);
obj1.myFun.apply(obj2);
//bind有点特殊
var bar = function() {
   console.log(this.gender)
}
var foo = {
    gender:'男'
}
bar();//undefined
var fnc = bar.bind(foo);//此时this指向已经指向了foo;但是不会立即执行,这里只是创建了一个新函数
fnc()或者bar.bind(foo)()//这样就能成功调用
```
- 6.forEach
```
var out = []
[1,2,3].forEach(function(elem){
      this.push(elem * elem)//这里的this指向为forEach的第二个参数;将数组里的每个值进行平方,追加到out数组
},out)
console.log(out)
//输出为[1,4,9]
```
- 7.对数组进行重构
```
var arr = [1,2,3];
var out = [];
arr.forEach(function(elem){this.push(elem*elem)},out)
同样可以实现重构的方法是ES6中的Array.from
Array.from(arr,x=>x*x)
```
- 8.class定义类方法
```
定义类,默认方法constructor,this关键字就是实例对象,除此之外还有一个toFn方法,该方法在类中不需要加function关键字
class Point{
    constructor(){
       this.name = '阿呆'
    }
    toFn(x,y){
      console.log(this.name);
      console.log(x+y)
    }
}
var Point1 = new Point();
Point1.toFn();

tips:ES5的prototype属性,在ES6的class类上面继续存在着,在类的实例上调用方法,其本质就是在原型链上调用方法
class Pro{}
var Pro1 = new Pro();
Pro1.constructor === Pro1.prototype.constructor //true
类的共享实例和ES5的原型对象一样
var p1 = new Pro()
var p2 = new Pro()
p1.__proto__ === p2.__proto__    //true
```
- 9.this的动态绑定指向
```
假设现在有一个按钮
var button = document.getElementByTagName('button');
button.addEventListener('click',()=>{
  console.log(this)在箭头函数中,因为是动态绑定的,导致这里的this指向并没有指向button,而是指向全局window,如果写成普通函数就不会出现这个问题
})
```