const arr = ['a', 'b', 'c'];
console.log(arr.length === 3);

const arr = ['a', 'b'];
const firstElement = arr[0];
console.log(firstElement, firstElement === 'a');

const arrOne = [1, 2, 3, 4];
const arrTwo = ['a', 'b', 3, 1, 'c'];

const getLast = function (arr) {
   return arr[arr.length - 1];
}

console.log(getLast(arrOne), getLast(arrTwo));

const string = 'hello';
const arr = ['a', string, [1, 2, 3]];

console.log(arr.length === 3 && arr[1] === string);

const arr = [1, 2, 3, 4];
const index = arr.indexOf(2);

console.log(arr[index] === 2);


const numbers = [1, 2, 3, 4];
numbers.push(3);
numbers.push(5);

console.log(numbers);
console.log(numbers[5] === 5 && numbers.length === 6);
