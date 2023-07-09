function myFunction(obj) {
  return obj.country
}

function myFunction(obj) {
  return obj['prop-2']
}

function myFunction(obj, key) {
  return obj[key]
}

function myFunction(a, b) {
   return b in a;
}

function myFunction(a, b) {
   return Boolean(a[b]);
}

function myFunction(a) {
   return { key: a };
}

function myFunction(a, b) {
   return { [a]: b };
}

function myFunction(a, b) {
   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

function myFunction(a) {
   return Object.keys(a);
}

function myFunction(obj) {
   return obj?.a?.b;
}

function myFunction(a) {
   return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}

function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}

function myFunction(a, b) {
   return Object.entries(a).reduce((acc, [key, val]) => {
   	return { ...acc, [key]: val * b };
   }, {});
}

function myFunction(obj) {
   return Object.entries(obj).reduce((acc, [key, val]) => {
      return { ...acc, [val]: key };
   }, {});
}

function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

function myFunction(arr, str) {
  return arr.map((obj) => ({ ...obj, continent: str }));
}

function myFunction(a) {
   return a.reduce((acc, cur) => {
   	return { ...acc, [cur]: (acc[cur] || 0) + 1 };
   }, {});
}

