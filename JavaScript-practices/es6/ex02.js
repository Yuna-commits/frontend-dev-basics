/**
 * Template Literal
 */

const no = 10;
const name = "둘리";
const email = "dooly@gmail.com";

// 1) 백틱(` : grave accent)과 표현식(${...})
console.log("no: " + no + ", name: " + name + ", email: " + email);
console.log(`no: ${no}, name: ${name}, email: ${email}`);

// 2) 다중행 지원
/**
 * 출력 예시
 * ===
 * no: 10
 * name: 둘리
 * email: dooly@gmail.com
 */
console.log(`no: ${no}
name: ${name} 
email: ${email}`);
