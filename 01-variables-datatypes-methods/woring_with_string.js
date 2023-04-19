// template literals

const name = "Max",
  age = 38;

temp = `Hello, my name is ${name} and I am ${age} years old`;

console.log(temp);

// String Properties and Methods
const s = new String("Hello World!!!");

console.log(typeof s);
console.log(s.length);

// access value by index
console.log(s[10]);
console.log(s.__proto__);

// Challenge
const myString = "developer";
capitalizedString = myString
  .charAt(0)
  .toUpperCase()
  .concat(myString.substring(1));

capitalizedString1 = `${myString[0].toUpperCase()}${myString.slice(1)}`;

slicedString = myString.slice(1);

console.log(capitalizedString);
console.log(slicedString);
console.log(capitalizedString1);
