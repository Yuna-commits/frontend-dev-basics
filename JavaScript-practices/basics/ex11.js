/**
 * 자바스크립트 함수
 */

console.log("===== [01] 함수 생성(정의) 방법: Literal 1");
function f1(a, b) {
  return a + b;
}
console.log(typeof f1, f1 instanceof Function, f1(10, 20));

console.log("===== [02] 함수 생성(정의) 방법: Literal 2");
var f2 = function (a, b) {
  return a + b;
};
console.log(typeof f2, f2 instanceof Function, f2(10, 20));

console.log("===== [03] 함수 생성(정의) 방법: Function 생성자 함수");
var f3 = new Function("a", "b", "return a + b");
console.log(typeof f3, f3 instanceof Function, f3(10, 20));

console.log("===== [04] 함수 생성(정의) 방법: 익명 함수");
// 1초 후에 hello world
setTimeout(function () {
  console.log("hello world");
}, 1000);

console.log("===== [05] 함수 생성(정의) 방법: 즉시 실행 함수");
// 한 번만 실행, 전역 변수 사용을 피할 수 있음
var s = (function (a, b) {
  return a + b;
})(10, 20);
console.log(s);

console.log("===== [06] 가변 파라미터");
var sum = function () {
  var sum = 0;

  // 1
  // for(var i = 0; i < arguments.length; i++){
  //     sum += arguments[i];
  // }

  // 2 : error
  // arguments는 Array가 아니라 유사 배열 객체
  // -> 배열처럼 접근 가능하지만 forEach(배열 메서드) 없음
  //   arguments.array.forEach((element) => {
  //     sum += element;
  //   });

  // Array.prototype.forEach 직접 호출 + caller(this) 바꾸기
  // forEach의 this를 arguments로 바꿈
  // 3 : method borrowing (메서드 빌려쓰기)
  Array.prototype.forEach.call(arguments, function (element) {
    sum += element;
  });

  return sum;
};

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(10, 20, 30, 40, 50));

console.log("===== [07] caller(this) 바꾸기");
var myObject = {
  v: "me",
  f1: function () {
    console.log(this.v);
  },
  f2: function (param) {
    console.log(param + " " + this.v);
  },
};

// 일반적인 객체의 함수 호출
myObject.f1();

// apply: 호출되는 함수의 this를 파라미터로 전달되는 객체로 바꿔 그 함수를 즉시 호출
myObject.f1.apply({ v: "you" });

// call: 호출되는 함수의 this를 첫번째 파라미터로 전달되는 객체로 바꿔 그 함수를 즉시 호출
// 두번째 파라미터부터 호출되는 함수의 파라미터로 사용
myObject.f2.call({ v: "you" }, "hello"); // call(this, param)

// bind: 호출되기 전의 함수의 this를 파라미터로 전달되는 객체로 바인딩(즉시 호출 x)
var f3 = function() {
    console.log(this.v); // this : myObject
}.bind(myObject);

f3();