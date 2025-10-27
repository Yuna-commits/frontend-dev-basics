/**
 * Array's Iteration Functions
 *
 * - forEach
 * - map
 * - filter
 * - find
 * - findIndex
 * - every
 * - some
 * - reduce
 * - reduceRight
 */

console.log("===== [01: forEach]");
const a = [1, 2, 3, 4, 5];
a.forEach((e, i) => console.log(i + ":" + e));
/**
 * 0:1
 * 1:2
 * 2:3
 * 3:4
 * 4:5
 */

console.log("===== [02: map]");
const a2 = a.map((e) => e ** 2);
console.log(a2); // (5) [1, 4, 9, 16, 25]

console.log("===== [03: filter]");
const a3 = a.filter((e) => e % 2 === 0);
console.log(a3); // (2) [2, 4]

console.log("==========[04: find]");
const value = a.find((e) => e % 2 === 0);
console.log(value); // 2(값)

console.log("==========[05: findIndex]");
const index = a.findIndex((e) => e % 3 === 0);
console.log(index); // 2(인덱스)

console.log("==========[06: every]");
const result1 = a.every((e) => e < 10); // 배열의 모든 요소가 10보다 작다
console.log(result1); // true

console.log("==========[07: some]");
const result2 = a.some((e) => e % 6 === 0); // 배열의 어떤 요소가 6으로 나누어 떨어진다
console.log(result2); // false

/**
 * reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
 * - array를 하나의 단일 값으로 줄인다
 * - 원본 배열의 값은 변경하지 않는다
 * ===
 * - accumulator : 이전 reducer 함수의 리턴 값
 */
console.log("==========[08: reduce]");
let sum = 0;
a.forEach((e) => (sum += e)); // 15
console.log(sum);

sum = a.reduce((a, e) => {
    a += e;
    return a;
}, 0);
console.log(sum); // 15(누적 계산의 결과)

/**
 * reduceRight
 * - reduce()와 같은 기능을 배열의 끝에서부터 시작
 */
console.log("==========[09: reduceRight]");
const result3 = a.reduceRight(function (a, e) {
    a.push(e * e);
    return a;
}, []);
console.log(result3); // (5) [25, 16, 9, 4, 1]

console.log("reduce() vs reduceRight()");
var arr = [10, 100, 1000];
var subtract = arr.reduce((total, value) => total - value);
var subtract_right = arr.reduceRight((total, value) => total - value);

console.log(subtract); // -1090 : -90 -> -1090
console.log(subtract_right); // 890 : 900 -> 890
