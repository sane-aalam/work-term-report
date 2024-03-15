let numString1 = "3.14159";
let numString2 = "10abc";
let numString3 = "123.45e2";

let number1 = parseFloat(numString1);  // number1 will be 3.14159
let number2 = parseFloat(numString2);  // number2 will be NaN
let number3 = parseFloat(numString3);  // number3 will be 12345
