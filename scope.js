const price = 10;
const quantity = 5;
 
function calculatePrice() {
    const result = price * quantity;
    return result;
};
 
const total = calculatePrice();
console.log(total);
// expected output = 50

let x = 1;
 
function func() {
   x = x + 1;
};
 
func();
console.log(x);
// expected output = 2

const x = 10;
 
function multiply() {
   const y = 10;
   const x = 5;
   return x * y;
};
 
const result = multiply();
console.log(result);
// expected output = 50

const x = 10;
const y = 2;
let result = 0;
{
   const y = 15;
   result = x + y;
}
console.log(result);
// expected output = 25

let x = 10;
{
   x = 30;
}
console.log(x);
// expected output = 30
