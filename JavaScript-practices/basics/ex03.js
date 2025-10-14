console.log("===== [01] undefined");
var myVar1; // 암시적 undefined
var myVar2 = undefined; // 명시적 undefined;
var myVar3 = null;

console.log(myVar1, myVar2);

console.log("===== [02] undefined, null 동치 비교(equals)");
console.log(myVar1 == myVar3); // 값 비교
console.log(myVar1 === myVar3); // 값 & 타입 비교, 객체이면 동일성 비교

// == : equality, 값의 동치성, 형변환 발생
console.log(4 == "4");
console.log(false == 0);
console.log(4 == new String("4"));

// === : 1. 타입의 동일성 2. primitive/object type 값/객체의 동일성
console.log(4 === "4");
console.log(false === 0);
console.log(4 === new String("4"));
console.log(new Number(3) === new Number(3)); // 다른 객체