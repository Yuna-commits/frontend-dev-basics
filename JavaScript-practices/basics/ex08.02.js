var colors = ["black", "red", "white"];
var fruits = ["banana", "kiwi", "grape"];

console.log("===== [01] concat");
var a1 = fruits.concat(colors);
console.log(a1);

console.log("===== [02] stack");
console.log(colors.pop(), colors);
colors.push("yellow");
console.log(colors);

console.log("===== [03] join");
var s = fruits.join(":");
console.log(s);

console.log("===== [04] reverse");
console.log(fruits);
fruits.reverse();
console.log(fruits);

console.log("===== [05] shift");
var numbers = [100, 200, 300, 400, 500];
var numbers2 = numbers.shift();
console.log(numbers2, numbers);

console.log("===== [06] slice");
var numbers2 = numbers.slice(1, 3);
console.log(numbers2, numbers);

console.log("===== [07] splice(index, count)");
console.log(fruits);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2);

console.log("===== [08] splice(index, count, replace)");
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a1, a2);

console.log("===== [09] splice : removeAt");
var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1); // removeAt(2)
console.log(a3);

console.log("===== [10] splice : insert");
var a4 = [0, 1, 2, 3, 5];
a4.splice(4, 0, 4); // insert(4)
console.log(a4);

console.log("===== [11] sort");


console.log("===== [12] unshift");
console.log("===== [13] indexOf");
console.log("===== [14] lastIndexOf");
console.log("===== [15] unshift");