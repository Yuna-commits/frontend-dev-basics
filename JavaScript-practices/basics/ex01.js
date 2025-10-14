console.log("===== [01] 기본 타입, Primitive type");
var u; // undefined
var i = 10; // number
var s = "hello world"; // string
var b = true; // boolean

console.log("u: " + typeof u + " : " + u);
console.log("i: " + typeof i + " : " + i);
console.log("s: " + typeof s + " : " + s);
console.log("b: " + typeof b + " : " + b);

// console.log(k); // k is not defined

console.log("===== [02.01] 객체 타입, Object");
var i = new Number(10); // object
var s = new String("hello world"); // object
var b = new Boolean(false); //object

var o = {}; // literal object
var a = []; // literal array
var n = null;

console.log("i: " + typeof i + " : " + i);
console.log("s: " + typeof s + " : " + s);
console.log("b: " + typeof b + " : " + b);
console.log("o: " + typeof o + " : " + o);
console.log("a: " + typeof a + " : " + a);
console.log("n: " + typeof n + " : " + n);

console.log("===== [02.02] 객체 타입, Function");
var f1 = function () {};
function f2() {}
var f3 = new Function();

console.log("f1: " + typeof f1);
console.log("f2: " + typeof f2);
console.log("f3: " + typeof f3);

console.log("===== [03] 기본 타입과 유사객체");
var b1 = true; // new Boolean(true)로 객체화 x
var b2 = new Boolean(true);

// 호출 시, new Boolean(b1).valueOf() 동작
console.log(b1.valueOf()); // primitive type의 메소드 사용
console.log(b2.valueOf());
