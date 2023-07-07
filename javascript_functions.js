function func() {
   return 'hello world';
};
const result = func();
console.log(result);

const func = function() {
   return 'hello world';
};
const result = func();
console.log(result);

const func = function() {
   let text = 'hello';
   text = text + ' world';
   return text;
};
const result = func();
console.log(result);

const func = function () {
   let text = 'hello';
   text = text + ' world';
   return text;
};
const result = func();
console.log(result);

const multiply = function (num) {
   return num * num;
};
 
const arg = 5;
 
const result = multiply(arg);
console.log(result === 25);

const multiply = function (x, y) {
   return x * y;
};
 
const result = multiply(7, 3);
 
console.log(result === 21);

const func = function (a, b) {
   return b + a;
};
 
const result = func(' world', 'hello');
 
console.log(result);

const func = function (num) {
   if (num < 5) {
       return;
   }
   return num * num
};
 
const result = func(5);
 
console.log(result);
