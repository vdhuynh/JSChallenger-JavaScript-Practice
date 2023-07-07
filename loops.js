let result = 0;
for (let i = 1; i <= 3; i = i + 1) {
   console.log(i)
   result = result + i;
}
console.log(result === 6);

const mixed = [10,4,'c',6,'a',4];
const newArray = [];

for (let i = 0; i < mixed.length; i++) {
   const current = mixed[i];
   if (typeof current === 'number') {
       newArray.push(current);
   }
}

console.log(newArray);

const mixed = [10,4,'c',6,'a',4];
const newArray = [];

for (let i = 0; i < mixed.length; i++) {
   const current = mixed[i];
   if (typeof current !== 'number') break;
   newArray.push(current);
}

console.log(newArray);

let num = 0;
let i = 0;

while ( i < 30 ) {
   num = num + 2;
   i = i + 1;
}

console.log(num);
