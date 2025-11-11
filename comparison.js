const number1 = 10 > 5;
const number2 = 8 < 4;
const number3 = -1 >= 2;
const number4 = 0.5 <= 0;

console.log('10 > 5 IS', number1); // true
console.log('8 > 4 IS', number2);  // false
console.log('-1 >= 2 IS', number3); // false
console.log('0.5 <= 0 IS', number4); // false

console.log('==============================');
const letter = "abc" === "abc";
const conditional = false !== true;
const letter2 = "cab" === "cba"
const conditional2 = false === false

console.log("abc === abc IS", letter); // true
console.log("false !== true IS", conditional);  // true
console.log("cab === cba IS", letter2); // false
console.log("false === false IS", conditional2); // true