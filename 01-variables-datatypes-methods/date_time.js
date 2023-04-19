// create new date obj
let d;
d = new Date();

//console.log(d, typeof d);

d = new Date(2023, 6, 10, 12, 30, 0); // 2023-07-09T17:00:00.000Z - cause month is 0 based index

d = new Date("2023-07-20");

d = Date.now();
d = new Date(1679292666981);
let year = d.getUTCFullYear();
let month = d.getUTCMonth();
let day = d.getUTCDate(); // get day of the month
let dayOfTheWeek = d.getUTCDay(); // get day of the week
let dateString = d.toLocaleDateString();

console.log(d);
console.log(year);
console.log(month);
console.log(day);
console.log(dayOfTheWeek);
console.log(dateString);

// Intl Datetime

let intl = Intl.DateTimeFormat("en-US").format(d);
let monthName = Intl.DateTimeFormat("default", { month: "long" }).format(d);
monthName = d.toLocaleString("default", { month: "short" });

let dateInformation = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});

console.log(dateInformation);
