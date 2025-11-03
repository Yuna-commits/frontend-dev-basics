/**
 * 1. callback 지원 비동기 함수
 */
exports.asyncFn01 = function (param, callback) {
    // 비동기 코드
    // -> 파일 시스템(IO), 네트워크 통신(fetch), SQL to DB, setTimeout, ... etc
    setTimeout(() => {
        /**
         * 비동기 처리
         */
        if (param !== null) {
            callback(null, "success");
        } else {
            callback(new Error(), null);
        }
    }, 3000);
};

/**
 * 2. Promise 지원 비동기 함수
 */
exports.asyncFn02 = function (param) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            /**
             * 비동기 처리
             */
            if (param !== null) {
                // 성공
                resolve("success");
            } else {
                // 실패
                reject(new Error());
            }
        }, 3000);
    });
};
