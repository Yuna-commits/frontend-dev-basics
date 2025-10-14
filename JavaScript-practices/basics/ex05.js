console.log("====[01] 일반함수");

var myFunction = function() {
    console.log("일반함수")
}

myFunction();


console.log("====[02] 생성자 함수");
var MyObject = function(name, age) {
    console.log("MyObject constructor called");
    this.name = name;
    this.age = this.age;
}

var o1 = new MyObject("둘리", 10);
console.log("o:" + typeof(o1));
console.log(o1);

var o2 = new MyObject("마이콜", 30);
console.log(o2);