/**
 * 1. callback 지원 비동기 함수 사용
 */
const { asyncFn01 } = require("./async-fns");

// Test : success
asyncFn01("params~", function (error, result) {
    if (error) {
        console.log("error");
        return;
    }

    console.log("3 seconds later...");
    console.log(result);
});

// Test : fail
asyncFn01(null, function (error, result) {
    if (error) {
        console.log("error");
        return;
    }
    console.log("3 seconds later...");
    console.log(result);
});

console.log("wait...");
