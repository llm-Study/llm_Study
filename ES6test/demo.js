//数组的解构赋值
let [a, b, c] = [1, 2, 3]
console.log(a + '这里是解构赋值');
console.log(b + '这里是解构赋值');
console.log(c + '这里是解构赋值');
//对象的解构赋值
let {
    foo,
    bar
} = {
    foo: 1,
    bar: 2
}
console.log(foo + bar + '这里是解构赋值')
//字符串的解构赋值
let [A, B, C] = 'llm'
console.log(A + B + C + '这里是字符串的解构赋值')
//字符串方法
let name = '小明同学'
let blog = `你好${name}`
document.write(blog)
console.log(blog)
console.log(blog.includes(name) + '  blog.includes()方法查找字符串中是否有这个字符串') //查找字符串中是否有这个字符串
console.log(blog.endsWith(name) + '  blog.endsWith()方法查找字符串末尾是否有这个字符串') //查找字符串末尾是否有这个字符串
console.log(blog.startsWith(name) + '  blog.startsWith()方法查找字符串开头是否有这个字符串') //查找字符串开头是否有这个字符串
//数字方法
let num = 987;
console.log(Number.isInteger(num) + '  Number.isInteger()判断数字是否为整数') //判断数字是否为整数
console.log(Math.pow(2, 53) - 1 + '  Math.pow()数字的极限值') //极限值
console.log(Number.MAX_SAFE_INTEGER + '  与Math.pow()方法一样,都是返回数字的极限最大值') //同上
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1) + '  判断是否为最大安全整数') //判断是否为最大安全整数
//ES6新增数组查找方法(也可以查找字符串类型的数组)
let arr = [1, 2, 3, 4, 5]
arr.find((value, index, arr) => {
    return value > 3
})
//ES6新增数组循环(map,forEach,filter,some)
let str = ['小明', '小小明', '小小小明']
let str1 = [1, 2, 3]
let list = str.entries();
console.log(list.next().value)

function fun(arr) {
    console.log(arr)
}
fun(str)
str.map((value, index) => {
    console.log(str[index])
})
//对象方法
let obj1 = {
    name: 'llm'
}
let obj2 = {
    name: 'llm'
}
console.log(Object.is(obj1.name, obj2.name))
//对象合并
let obj3 = {
    obj3: 'llm'
}
let obj4 = {
    obj4: 'llmllm',
    age: 18
}
console.log(Object.assign(obj3, obj4))
//Set和WeaSket
let Arr = [1, 2, 3]
let ArrSet = new Set(Arr)
ArrSet.add('啊啊啊')
console.log(ArrSet)
//Proxy预处理
let Pro = new Proxy({
    fn: function () {
        console.log(this.name);
    },
    name: 'llm',
    age: 18
}, {
    get: (target, key) => {
        console.log('Proxy预处理之前')
        return '你好' + target[key]
    },
    set: (target, key, value) => {
        return target[key] = value
    }
})

console.log(Pro.name)
Pro.name = '猪猪侠'
console.log(Pro.name)
//class类与继承
class father {
    name(val) {
        console.log(val)
        return val
    }
    skill(name, skill) {
        console.log(this.name(name) + ':' + skill)
    }
}
let f = new father;
f.skill('llm', 'web')
class son extends father {}
let son1 = new son;
son1.skill('llm', 'node')