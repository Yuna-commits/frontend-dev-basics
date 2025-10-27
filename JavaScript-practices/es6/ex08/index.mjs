console.log("===== [01. Unnamed Export Module]");
/**
 * default import
 * - default export는 import 시 {}를 사용하지 않음
 * - 변수명 지정 자유
 */
import myFunction from "./mods/ex01.mjs";
console.log(myFunction(10, 20)); // 30

import myObject from "./mods/ex02.mjs";
console.log(myObject.add(10, 20), myObject.sub(100, 200)); // 30 -100

/**
 * named import
 * - import 시 반드시 {}로 이름 지정
 * - 지정된 이름은 export된 이름과 정확히 일치해야 함
 * - as 별칭 사용 가능
 */
console.log("===== [02. Named Export Module I]");
import { sub } from "./mods/ex03.mjs";
console.log(sub(100, 200));

console.log("===== [03. Named Export Module II]");
import * as m from "./mods/ex03.mjs";
console.log(m.add(10, 20), m.sub(100, 200));

console.log("===== [04. Named + Unnamed Export Module II]");
import math, { add } from "./mods/ex04.mjs"; // math : default {add, sub}
console.log(math.sub(100, 200), add(10, 20));
