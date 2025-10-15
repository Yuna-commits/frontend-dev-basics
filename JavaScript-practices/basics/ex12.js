/**
 * Lexical Scope
 */

console.log("=== [01] Lexical Scope");
var f1 = function () {
    var s = "hello world";

    var inner = function () {
        console.log(s);
    };

    inner();
};

f1();

console.log("=== [02] Closure");
var f2 = function () {
    var s = "hello world";

    var inner = function () {
        console.log(s);
    };

    return inner;
};

// 반환된 inner 함수를 closure에 저장
// closure는 f2가 끝난 뒤에도 f2의 변수 s를 기억하고 있음
var closure = f2();
closure();
