var o = {
  name: "둘리",
  age: 10,
};

var f = function () {
  console.log("hello world");
};

console.log("===== [01] object 타입의 확장");

o.another = {
  age: 20,
  name: "마이콜",
  print: function () {
    console.log(this.age + ":" + this.name);
  },
};

o.another.print();

console.log("===== [02] function 타입의 확장");

f.another = {
  age: 20,
  name: "마이콜",
  print: function () {
    console.log(this.age + ":" + this.name);
  },
};

f();
f.another.print();

console.log("===== [03] 기본(primitive) 타입의 확장은 불가능");
var i1 = 10;
var i2 = new Number(20);

console.log(i1 + ":" + i2 + ":" + (i1 + i2));
i2.another = {
    age: 20,
    name: "마이콜"
}
console.log(i2.another);

i1.another = {};            // (new Number(i1)).another = {};
console.log(i1.another);    // console.log((new Number(i1)).another)