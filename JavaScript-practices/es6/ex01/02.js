/**
 * const
 * - 중복 선언 불가능
 * - 값의 재할당 불가능 "상수"
 * - 선언과 동시에 값 정의
 * - 블록 레벨 스코프
 */

// 1. const의 블록 범위
try {
    if (true) {
        const NUM = 10; // ReferenceError: NUM is not defined
    }

    console.log(NUM);
} catch (e) {
    console.log("error: " + e);
}

// 2. const의 상수화 : 대입(Assignment) 에러
try {
    const NUM = 10;
    NUM = 20; // TypeError: Assignment to constant variable.
} catch (e) {
    console.log("error: " + e);
}
