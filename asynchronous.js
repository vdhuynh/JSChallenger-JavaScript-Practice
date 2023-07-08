let i = 0;
function func() {
 i = 2;
}
func();
// expected output = 2
console.log(i);

let count = 0;
function increment() {
 count = count + 1;
}
setTimeout(() => {
  increment();
  console.log(count);
}, 1000);
 
console.log(count);

let result = 0;
function getValue(callback) {
   setTimeout(function() {
      callback()
      console.log(result);
   }, 500);
}
getValue(function() {
   result = 5;
});

let a = 2;
let b = 2;
 
function multiply() {
  b = a * b;
  console.log(`The value of b = ${b}`);
}
function getValue(callback) {
  setTimeout(function() {
    a = 5;
    callback()
  }, 500);
}
getValue(multiply);

const promise = new Promise(function(resolve) {
  console.log('Starting task...');
  resolve(100);
});
 
promise.then(function(res) {
  console.log('Promise fulfilled');
  console.log(res);
});

const promise = new Promise(function(resolve) {
  console.log('Starting task...');
  let data;
  setTimeout(function() {
    data = 100;
    resolve(data);
  }, 1000);
});
promise.then(function(res) {
  console.log('Promise fulfilled');
  console.log(res);
});

let data = 5;
let result;
 
const promise = new Promise(function(resolve) {
  console.log('Starting task...');
  setTimeout(function() {
    data = 100;
    console.log('Resolving now...');
    resolve();
  }, 1000);
});
 
function multiply(val) {
  result = val * val;
}
 
promise.then(function() {
  multiply(data);
  console.log(result);
});
