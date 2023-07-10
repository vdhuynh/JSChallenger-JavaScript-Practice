function myFunction(set, val) {
  return set.has(val);
}

function myFunction(set) {
  return [...set];
}

function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}

function myFunction(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}

function myFunction(set, val) {
  set.delete(val);
  return set;
}

function myFunction(set, arr) {
  arr.forEach((e) => set.add(e));
  return set;
}

 const int = new Set();
  a.forEach(el => b.has(el) && int.add(el));
  return int;
