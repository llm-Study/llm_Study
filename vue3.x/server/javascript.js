//链式引用
o1 = {};
o2 = {
    bar: '你好'
};
o1.foo = o2;
// console.log(o1.foo.bar);
//arguments(至少一个对象)
function foo(a) {
    for (let i = 0; i < arguments.length; i++) {
        var ages = Array.prototype.slice.call(arguments); //将arguments对象转换为真正的数组
        //另外一种转换成正常的数组方法,ES6:Array.from(arguments)
    }
    console.log(ages)
}
foo(1, 2, 3, 4)

function f1() {
    var a = 999;
    return function f2() {
        console.log(a)
    }
}
var b = (function () {
    var a = 999;
    return a
}())
console.log(b)
var res = f1();
res()
// console.log(true - 1)
// console.time('time');
for (let i = 0; i < 1; i++) {
    // console.log(i)
}
// console.timeEnd('time');
//判断数据类型,比typeof更加准确
var arr = '123';
var arra = [1, 2]
var type = function (o) {
    var s = Object.prototype.toString.call(o); //Object.prototype.tostring.call()可以看出一个值到底是什么类型
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}
console.log(type(arr))
//call(),apply(),bind()的区别
var obj = {
    name: '李华',
    Objage: this.age, //这里的this指向obj内部
    myFun(df, nl) {
        console.log(this.name + ';' + this.age, '来自' + df, '去往' + nl)
    }
};
var db = {
    name: '猪猪侠',
    age: 999
}
obj.myFun.call(db, '四川', '重庆');
obj.myFun.apply(db, ['四川', '重庆']);
obj.myFun.bind(db, ['四川', '重庆'])();


var out = [];
var arr2 = [1, 2, 3]
arr2.forEach(function (elem) {
    this.push(elem * elem);
}, out); //forEach的第二个参数回调关键字就指向out,也可以使用ES6语法中的Array.from
console.log(out)
console.log(Array.from(arr2, x => x * x))
//filter过滤
var arr3 = arr2.filter(function (elem) {
    return (elem > 1)
})
console.log(arr3)
Number.prototype.double = function () {
    return this.valueOf() + this.valueOf()
}
console.log(Number(5).double())


//12月27日
//1.运算
Math.pow(2, 3) //pow第一个参数是底数,第二个参数是幂值
Math.sqrt(2) //sqrt返回参数的平方根,如果是负数则是NaN
//随机数提升
function rom(min, max) { //在最小参数和最大参数之间随机生成一个整数
    return Math.floor(Math.random() * (max - min)) + min
}
rom(5, 6)
//构造函数
function Foo() {
    'use strict'
    if (!(this instanceof Foo)) {
        return new Foo()
    }
    this.name = '奥斯卡'
    this.age = 18
}
Foo().name;
//this关键字
var f = function () {
    console.log(this === global)
}
var obk = {
    f: f
}
obk.f();
//prototype属性
function Pro(name) {
    this.name = name
    this.color = function () {
        return this.name
    }
}
var Pro1 = new Pro('大化')
var Pro2 = new Pro('小化')
console.log(Pro1.name + ';' + Pro1.color())
console.log(Pro2.name + ';' + Pro2.color())
//循环遍历对象属性
var per = {
    name: '卡',
    age: 18,
    gender: '男'
}
for (O in per) {
    console.log(per[O])
}

function prop(x, y) {
    this.x = x,
        this.y = y
}
let p = new prop(5, 7);
console.log(p)
//简写arguments转换数组(rest参数)
const num1 = (...numbers) => {
    return numbers.sort()
};
console.log(num1(1111, 2222))
//普通函数与箭头函数的作用域指向
function timer() {
    this.ss1 = 0;
    this.ss2 = 0;
    setInterval(() => this.ss1++, 1000) //箭头函数可以让this指向固定化
    setInterval(function () {
        this.ss2++;
    }, 1000)
}
var timers = new timer();
setTimeout(() => {
    console.log(timers.ss1)
}, 3100)
setTimeout(() => {
    console.log(timers.ss2)
}, 3100)
//tips:this指向固定化并不是表示箭头函数能够绑定this,而是因为箭头函数自身没有自己的this,导致内部的this指向外层,正因为没有this,所以不能成为构造函数
function fooo() {
    setTimeout(() => {
        console.log(Array.prototype.slice.call(arguments))
        console.log(arguments)
    }, 100)
}
fooo(1, 2, 3)
//上面箭头函数中的arguments,其实是函数fooo的变量

//Set构造函数提供数组去重的方法,tips:注意,set结构没有键名,只有键值,所以keys()与values方法都是遍历器对象
let s = new Set([1, 2, 3, 1, 2, 5])
let ss = [...s];
console.log(ss)
//bind
var oo = {
    name: '大佬'
}

function ooo(x, y) {
    this.name = '大佬1号';
    console.log(this.name);
    console.log(x + y);
    console.log(arguments)
}
var oooo = ooo.bind(oo, 6)
oooo(7, 9);
//some方法,如果满足数组的任意一项,返回对应值,every方法,如果数组的值任意一项不满足,返回对应值
var add = [1, 2, 5, 8, 10, 11, 20];
var add1 = add.some(x => {
    if (x > 9) {
        return true
    } else {
        return false
    }
})
console.log(add1)
//class定义类
//默认方法(constructor),this关键字就是实例对象,除了该方法,还定义了一个toFn方法,该方法在定义类方法的时候,不用加上function关键字,直接把函数放进去就可以了
class Point {
    constructor() {
        this.name = '猪猪侠'
    }
    toFn(x, y) {
        console.log(x + y)
        console.log(this.name)
    }
}
var Point1 = new Point();
Point1.toFn(5, 7);


function trims(array) {
    return array.some(x => {
        if (x > 2) return true
    })
}
console.log(trims([1, 2, 3, 1]))
