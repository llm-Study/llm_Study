## nodejs

```
���߳��ǵ��߳�(�첽)callback.���������߼�д�ɺ���,���뵱ǰִ�еĺ�����,��ִ�еĺ����õ������,ִ�д��뺯��(�ص�����)
```


```
console.log()/info/warn/error/time/timeEnd
process ����
Buffer ������
clearImmediate setImmediate
clearTimeout
```

### ������ģ��
- ͨ��npm�����а�װ 
```
npm root nrm -g //�����Զ����뻷������,����ͨ��npm����ӳ
nrm ls  ��ʾ���еĿ���Դ
npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
  

npm install nrm -g
�л�Ĭ������Դ
nrm use cnpm  ->�л����й�������Դ
```
### 12��16����ѧ
- 1.��ʽ����
```
var o1 = {};
var o2 = {
  name:'С��'
}
o1.name1 = o2
//���o1.name1.name,���ΪС��
```
- 2.arguments(���Բ��涨�β�,�����û�������ٸ�����)
```
function args(a){
  for(let i = 0;i<arguments.length;i++){
    var arrage = Array.prototype.slice.call(arguments)
    //���ｫargumentsת��Ϊ����������
  }
  console.log(arrage)
}
args(1,2,3,4)�������Ϊ[1,2,3,4]
```
- 3.�հ�
```
��һ��д��
function fn1(){
   var name = 'С��';
   return function fn2(){
       console.log(name)
   }
}
var fn3 = fn1();
fn3();
�ڶ���д��
var f1 = (function(){
    var name = 'С��';
    return name
}())
console.log(f1)
```
- 4.�ж���������(��typeof����׼ȷ)
```
var arr = [1,2,3];
var str = '123'
var type = function(o){
    var s = Object.prototype.toString.call(o);
    //Object.prototype.toString���Կ�������Ĳ���������ʲô����
    return s.match(/\[Object .*?\]/)[1].toLowerCase();
    //����ֵ�ѵ�һλ��ת��ΪСд
}
console.log(type(arr))
//������Ϊarray
console.log(type(str))
//������Ϊstring
```
- 5.call(),apply(),bind()������
```
var obj1 = {
  name:'С��',
  age:22,
  myFun(){
    console.log(this.name+';'+this.age)
  }
}
var obj2 = {
    name:'С��',
    age:18
}
//call�������thisָ��Ϊobj2,myFun����ָ��Ϊobj2��name,  ���Ϊ С��;18     tips:���ԼӲ���   obj1.myFun.call(obj2,'�Ĵ�','����',....);
obj1.myFun.call(obj2);
//applyͬ��,ָ��Ϊobj2, ���Ϊ С��;18 tips:��Ҫע�����  apply��Ҫ����Ĳ����������������ʽ,����:  obj1.myFun.apply(obj2,['�Ĵ�','����'],[...]);
obj1.myFun.apply(obj2);
//bind�е�����
var bar = function() {
   console.log(this.gender)
}
var foo = {
    gender:'��'
}
bar();//undefined
var fnc = bar.bind(foo);//��ʱthisָ���Ѿ�ָ����foo;���ǲ�������ִ��,����ֻ�Ǵ�����һ���º���
fnc()����bar.bind(foo)()//�������ܳɹ�����
```
- 6.forEach
```
var out = []
[1,2,3].forEach(function(elem){
      this.push(elem * elem)//�����thisָ��ΪforEach�ĵڶ�������;���������ÿ��ֵ����ƽ��,׷�ӵ�out����
},out)
console.log(out)
//���Ϊ[1,4,9]
```
- 7.����������ع�
```
var arr = [1,2,3];
var out = [];
arr.forEach(function(elem){this.push(elem*elem)},out)
ͬ������ʵ���ع��ķ�����ES6�е�Array.from
Array.from(arr,x=>x*x)
```
- 8.class�����෽��
```
������,Ĭ�Ϸ���constructor,this�ؼ��־���ʵ������,����֮�⻹��һ��toFn����,�÷��������в���Ҫ��function�ؼ���
class Point{
    constructor(){
       this.name = '����'
    }
    toFn(x,y){
      console.log(this.name);
      console.log(x+y)
    }
}
var Point1 = new Point();
Point1.toFn();

tips:ES5��prototype����,��ES6��class���������������,�����ʵ���ϵ��÷���,�䱾�ʾ�����ԭ�����ϵ��÷���
class Pro{}
var Pro1 = new Pro();
Pro1.constructor === Pro1.prototype.constructor //true
��Ĺ���ʵ����ES5��ԭ�Ͷ���һ��
var p1 = new Pro()
var p2 = new Pro()
p1.__proto__ === p2.__proto__    //true
```
- 9.this�Ķ�̬��ָ��
```
����������һ����ť
var button = document.getElementByTagName('button');
button.addEventListener('click',()=>{
  console.log(this)�ڼ�ͷ������,��Ϊ�Ƕ�̬�󶨵�,���������thisָ��û��ָ��button,����ָ��ȫ��window,���д����ͨ�����Ͳ�������������
})
```