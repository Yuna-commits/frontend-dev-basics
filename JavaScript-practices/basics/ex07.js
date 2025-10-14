var MyMath = function (name) {
  console.log("MyMath Constructor Called...");
  this.name = name;
};

console.log("===== [01] prototype 객체");
console.log(MyMath.prototype);

console.log("===== [02] prototype.constructor");
console.log(MyMath.prototype.constructor);

console.log("===== [03] prototype 객체 확장");
MyMath.prototype.add = function (a, b) {
  return a + b;
};
MyMath.prototype.PI = 3.14;
console.log(MyMath.prototype);

console.log("===== [04] MyMath 생성자 함수로 생성한 객체의 __proto__ 객체");
var math = new MyMath("수학");
console.log(math.__proto__ === MyMath.prototype);

console.log("===== [05] 리터럴 {}로 정의한 객체의 __proto__ 객체");
var obj = {};
console.log(obj.__proto__ === Object.prototype);

console.log("===== [06] prototype 객체 속성 접근 - 상속");
console.log(math.add(10, -20), math.PI);

console.log("===== [07] prototype 객체 속성 접근 - 오버라이드");
math.add = function (a, b) {
  console.log("add called by " + this);
  return Math.abs(a) + Math.abs(b);
};
console.log(math.add(10, -20), math.PI);

console.log("===== [08] 생성 객체만의 속성");
math.subtract = function (a, b) {
  return a - b;
};
console.log(math.subtract(10, 20));

console.log("===== [09] prototype 객체의 __proto__ 속성 확인");
console.log(MyMath.prototype.__proto__ === Object.prototype);

console.log("===== [10] Object.prototype 객체 속성");
console.log(math.toString(), math.hasOwnProperty("add"));
math.toString = function () {
  return "[MyMath " + this.name + "]";
};
console.log(math.toString());

console.log("===== [11] function 객체의 __proto__ 확인");
console.log(MyMath.__proto__ === Function.prototype);

console.log("===== [12] Function.prototype 객체의 속성");
console.log(math.toString.apply({ name: "둘리" }), math.add.call(null, 10, 20));
