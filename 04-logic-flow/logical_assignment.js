// ??= assigns the right side value only if the left is null or defined

let c;

c = c ?? 20;

console.log(c);

// &&= only assigns the right side value only if the left side is truthy value

let b = "10";
b = b && 20;

console.log(b);

// ternary operator
const age = 38;

// if (age >= 18) {
//   console.log('You can vote!!!');
// } else {
//   console.log('You cannot vote!!!');
// }

// Using ternary operator
age >= 18 ? console.log("Bravo") : console.log("Under 18");

// Assigning a conditional value to a var
const canVote = age >= 18 ? true : false;
// console.log(canVote);

// Multiple statements
const auth = true;
let redirect;

if (auth) {
  alert("Welcome to the dashboard");
  redirect = "/dashboard";
} else {
  alert("Access denied!!!");
  redirect = "/login";
}

auth
  ? (alert("Welcome to the dashboard"), "/dashboard")
  : alert("Access denied!!", "/login");
