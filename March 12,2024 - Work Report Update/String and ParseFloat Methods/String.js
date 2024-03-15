// String length - to get the length of the sting
// String charAt() - to get char of the string index value
// String charCodeAt() - to get the char code of the string
// String at() - to get char of the string using index value
// String [ ] -
// String slice()
// String substring()
// String substr()
// String Search Methods
// String Templates
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

let stringOrignal = "Hello world!";
console.log(stringOrignal);

//* Length of string
let stringLenth = stringOrignal.length;
console.log(stringLenth);

//* String charAt() - we can get string char using index value
let stringCharAt = stringOrignal.charAt(0);
console.log(stringCharAt);

//* string charCodeAt()

let stringCharCode = stringOrignal.charCodeAt(0);
console.log(stringCharCode);

//* string at()
let stringAt = stringOrignal.at(0);
console.log(stringAt);

// string []
let FirstIndexValue = stringOrignal[0];
let secondIndexValue = stringOrignal[1];
let ThridIndexValue = stringOrignal[2];
let FourIndexValue = stringOrignal[3];

secondIndexValue = "z";

console.log(FirstIndexValue, secondIndexValue, ThridIndexValue, FourIndexValue);

let newString = "Newstring";
let toUpperCaseStringContainer = newString.toLocaleUpperCase();
console.log(toUpperCaseStringContainer)

