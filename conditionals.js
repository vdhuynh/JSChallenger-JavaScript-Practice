let num = 0;
if (1 < 2) {
   num = 1;
}
console.log(num === 1);

let text = 'hello';
if (text === 'hello') {
   text = text + ' world';
}
console.log(text === 'hello world');

let num = 0;
if (2 < 1) {
   num = 1;
} else {
   num = 2;
}
console.log(num === 2);

const numOne = 5;
const numTwo = 6;
let result;
if (numOne >= 5 && numTwo === 6) {
   result = true;
}
console.log(result === true);

let text;
const num = 2;
if (num > 2) {
   text = 'num is greater than 2';
} else if (num > 1) {
   text = 'num is greater than 1';
} else {
   text = 'num is smaller than or equal 1';
}
console.log(text);

const num = 4;
const text = num > 3 ? 'num is greater than 3' : 'num is smaller than or equal 3';
console.log(text);
