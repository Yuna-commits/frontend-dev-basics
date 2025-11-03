/**
 * 2. Promise 지원 비동기 함수 사용 I
 * ~ then ~ catch
 */
const { asyncFn02 } = require("./async-fns");

// Test : success
asyncFn02("params~")
    // 성공
    .then(function (result) {
        console.log(result);
    })
    // 실패
    .catch(function (error) {
        console.log(error);
    });

// Test : fail
asyncFn02(null)
    // 성공
    .then(function (result) {
        console.log(result);
    })
    // 실패
    .catch(function (error) {
        console.log(error);
    });

console.log("wait...");
