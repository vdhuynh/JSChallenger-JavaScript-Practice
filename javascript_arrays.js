function myFunction(a, n) {
   return a[n - 1];
}

function myFunction(a) {
   return a.slice(3);
}

function myFunction(a) {
   return a.slice(-3);
}

function myFunction(a, n) {
  return a.slice(-n);
}

function myFunction(a) {
   return a.slice(0, 3);
}

function myFunction( a, b ) {
  return a.filter(cur => cur !== b)
}

function myFunction(a) {
   return a.length;
}

function myFunction(a) {
   return a.filter((el) => el < 0).length;
}

function myFunction( arr ) {
return arr.sort()
}

function myFunction( arr ) {
  return arr.sort((a, b) => b - a)
}

function myFunction(a) {
   return a.reduce((acc, cur) => acc + cur, 0);
}

function myFunction( arr ) {
return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

return arr.reduce((a, b) => a.length <= b.length ? b : a)

function myFunction( arr ) {
  return new Set(arr).size === 1
}

function myFunction( ...arrays ) {
return arrays.flat()
}

function myFunction(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}

function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

function myFunction(a, b) {
  return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
}

function myFunction(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
return arr;
}

function myFunction(arr) {
 return arr.reduce((acc, cur) => {
   const firstLetter = cur.toLowerCase().charAt(0);
   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
 }, {});
}

function myFunction(arr, num) {
 return [...(num > 5 ? [num] : [0]), ...arr];
}

function myFunction(a, n) {
   let rest = [...a];
   let result = [];
   for (let i = 0; i < a.length; i++) {
      if (rest.length < n) break;
      result.push(rest[n - 1]);
      rest = rest.slice(n);
   }
   return result;
}
