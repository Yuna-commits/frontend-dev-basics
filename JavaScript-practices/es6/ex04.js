/**
 * Arrow Function
 */

// ex1
console.log("===== [ex1]");

const power = function (x) {
    const powerVal = x ** 2; // x*x
    return powerVal;
};

const nums = [1, 2, 3, 4, 5];

nums.forEach((element) => {
    console.log(`${element}: ${power(element)}`);
});

// ex2
console.log("===== [ex2]");

nums.forEach((element) => {
    // const result = ((x) => {
    //     return x ** 2;
    // })(element);
    // console.log(`${element}: ${result}`);

    // const result = ((x) => x ** 2)(element);
    // console.log(`${element}: ${result}`);

    console.log(`${element}: ${((x) => x ** 2)(element)}`);
});

// ex3
console.log("===== [ex3]");
nums.forEach((element) => {
    console.log(`${element}: ${((x) => x * x)(element)}`);
});

// ex4: arrow function에는 this가 존재하지 않는다(외부의 값을 가져옴)
console.log("===== [ex4]");
const dooly = {
    name: "둘리",
    friends: ["마이콜", "또치", "도우너"],
    // TypeError
    // printFriends: () => {
    //     this.friends.forEach((f) => console.log(f));
    // },
    printFriends: function () {
        this.friends.forEach((f) => console.log(f));
    },
};

dooly.printFriends();
