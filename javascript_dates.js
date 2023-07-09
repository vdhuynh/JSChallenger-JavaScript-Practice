function myFunction(a, b) {
     return a.getTime() === b.getTime()
}

function myFunction(a, b) {
   const dif = Math.abs(a - b);
   return dif / 1000 / 60 / 60 / 24
}

function myFunction(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate()=== b.getDate()
}

function myFunction(a, b) {
   return Math.abs(a - b) / 1000 / 60 <= 60
}

function myFunction(a, b) {
   return a < b
}

function myFunction(a, b) {
  const currentDays = a.getDate();
  return a.setDate(currentDays + b)
}

function myFunction(a, b) {
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec }
}

function myFunction(date) {
const quarter = 15 * 60 * 1000;
const closestQuarter = new Date(Math.round(date / quarter) * quarter);
const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
return nextQuarter.getMinutes();
}
