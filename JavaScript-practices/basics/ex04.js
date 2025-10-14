console.log("===== [01] 생성 방법 1: 생성자 함수");
var o1 = new Object();
o1.name = "둘리"; // 동적 객체 확장
o1.age = 10;
console.log(o1);

console.log("===== [02] 생성 방법 2: 리터럴 {}");
var o2 = {};
o2.name = "둘리"; // 동적 객체 확장
o2.age = 10;
o2.another = {};
o2.another.name = "마이콜";
o2.another.age = 30;
console.log(o2);
console.log(o2.another);

console.log("===== [03] 생성 방법 3: JSON(Java Script Object Notation)");
var o3 = {
    name: "둘리",
    age: 10,
    another: {
        name: "마이콜",
        age: 30
    }
};
console.log(o3);

console.log("===== [참고] JSON 포맷의 데이터 통신(AJAX) : XmlHttpRequest");
var responseBody = "{name: '둘리', age: 10, email: 'dooly@gmail.com'}";
var response = eval("(" + responseBody + ")");
console.log(response.name);