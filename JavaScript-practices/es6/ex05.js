/**
 * Destruction(구조 분해)
 */
console.log("===== [01.Basics]");
const user = {
    firstName: "둘",
    lastName: "리",
    age: 10,
};

const { firstName, lastName } = user;
console.log(`full name: ${firstName}${lastName}`);

console.log("===== [02. Default value]");
const goods1 = { name: "SamSung TV", price: 1000, countStock: 10 };
const goods2 = { name: "LG TV", price: 2000, countSold: 10 };
const goods3 = { name: "Sony TV", price: 2000 };

const printGoods = ({
    // default
    name = "no name",
    price = 0,
    countStock = 0,
    countSold = 0,
}) => {
    console.log(name, price, countStock, countSold);
};

printGoods(goods1);
printGoods(goods2);
printGoods(goods3);

console.log(
    "===== [03. 구조분해 대상이 되는 객체의 속성 이름과 다른 이름을 사용]"
);
const person = {
    n: "마이클",
    c: "Korea",
};

const printPerson = function ({ n: name, c: country }) {
    console.log(name, country);
};

printPerson(person); // 마이클 Korea

console.log(
    "===== [04. 구조분해 대상이 되는 객체 안의 내부객체(nested object)의 구조분해]"
);
const student = {
    email: "dooly@gmail.com",
    score: {
        math: 30,
        korean: 100,
        science: 50,
    },
};

const {
    email,
    score: { math, korean, science },
} = student;

console.log(email, math, korean, science); // dooly@gmail.com 30 100 50

console.log("===== [05. 함수 파라미터]");
const avgScore = ({ email, score: { math, korean, science } }) => {
    console.log(`${email}: ${(math + korean + science) / 3}`);
};

avgScore(student); // dooly@gmail.com: 60

console.log("===== [06. 배열의 구조분해: Basics]");
const color = [100, 20, 80]; // {"0": 100, "1": 20, "2": 80}

// const { 0: red, 2: blue, 1: green } = color;
let [red, green, blue] = color;
console.log(red, green, blue); // 100 20 80

console.log("===== [07. 배열의 구조분해: Default Value]");
[red, green, blue, alpha = 255] = color;
console.log(red, green, blue, alpha);

console.log("===== [08. 배열의 구조분해: Skip Value]");
const [, , blueOfRGB] = color;
console.log(blueOfRGB); // 80

console.log("===== [09. swap]");
let x = 200;
let y = 100;

console.log(x, y); // 200 100

// let temp = x;
// x = y;
// y = temp;
[y, x] = [x, y];
console.log(x, y); // 100 200

console.log("===== [10. Spread Operator]");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [firstColor, secondColor, ...otherColors] = colors;

// red orange (5) ['yellow', 'green', 'blue', 'indigo', 'violet']
console.log(firstColor, secondColor, otherColors);

console.log("===== [11. 가변 파라미터]");
const printColor = function () {
    // 유사배열이 배열의 forEach 메서드를 빌리는 방법(call 프로토타입 메서드)
    // Array.prototype.forEach.call(arguments, function (c) {
    //     console.log(c);
    // });

    // Array.from : 유사 배열을 받아 배열로 변환
    Array.from(arguments).forEach(function (c) {
        console.log(c);
    });
};

printColor("red", "orange", "yellow"); // arguments = ['red', 'orange', 'yellow']

/**
 * colors 변수가 가리키는 배열 객체 "참조"가 전달, 인자 1개
 */
printColor(colors); // arguments = [['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']];

/**
 * 전개 연산자(...)가 배열을 개별 요소로 펼쳐서 전달, 인자 7개
 */
printColor(...colors); // arguments = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// 전개: printColor('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')

console.log("===== [12. arguments 대체]");
const printColor2 = function (...colors) {
    colors.forEach(function (c) {
        console.log(c);
    });
};

printColor2("red");
printColor2("red", "orange", "yellow");
printColor2("red", "orange", "yellow", "green", "blue", "indigo", "violet");
