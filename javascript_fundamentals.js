function myFunction(a, b) {
   return a + b;
}

function myFunction(a, b) {
  return a === b;
}

function myFunction(a) {
   return typeof a;
}

function myFunction(a, n) {
   return a[n - 1];
}

function myFunction(a) {
   return a.slice(3);
}

function myFunction(str) {
   return str.slice(-3);
}

function myFunction(a) {
   return a.slice(0, 3);
}

function myFunction(a) {
   return a.indexOf('is');
}

function myFunction(a) {
   return a.slice(0, a.length / 2);
}

function myFunction(a) {
   return a.slice(0, -3);
}

function myFunction(a, b) {
  return b / 100 * a
}

function myFunction(a, b, c, d, e, f) {
   return (((a + b - c) * d) / e) ** f;
}

function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a
}

function myFunction(a) {
  return a % 2 === 0
}

function myFunction(a, b) {
  return b.split(a).length - 1
}

function myFunction(a) {
  return a - Math.floor(a) === 0
}

function myFunction(a, b) {
  return a < b ? a / b : a * b
}

function myFunction(a) {
  return Number(a.toFixed(2));
}

function myFunction( a ) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}


function myFunction(a, b) {
  const func = x => x.replace('%','');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

function myFunction( a ) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
 let n = a;
 while (!isPrime(n)) n++;
return n
}

function myFunction(x, y) {
  while (x % y !== 0) x++;
  return x;
}

function myFunction(a, b) {
   let result = [];
   let rest = a;
   while (rest.length) {
   	result.push(rest.slice(-3));
   	rest = rest.slice(0, -3);
   }
   return result.reverse().join(b);
}

function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
}
