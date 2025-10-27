/**
 * var
 * - 중복 선언, 재할당 가능
 * - 함수 레벨 스코프
 * - 함수 내부에 선언된 변수만 지역변수로 인정, 나머지는 전역변수로 간주
 *
 *
 * let
 * - 중복 선언 불가능
 * - 값의 재할당 가능
 * - 블록 레벨 스코프
 * - 함수 내부, 코드 블럭 내부에 선언된 변수는 지역변수로 취급
 */

// let의 블록 범위
try {
    if (true) {
        var i = 10;
        // let j = 20; // ReferenceError: j is not defined
    }
    // if 블록 바깥에는 j가 존재하지 않음
    let j = 20;

    console.log(i);
    console.log(j);
} catch (e) {
    console.log("error: " + e);
}
