const socials = ["twitter", "facebook", "instagram", "linkedIn"];

// pass in an anonymus function
socials.forEach(function (item) {
  console.log(item);
});

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Create a function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Filter - returns a modified array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// short version
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// or
numbers.filter((number) => number % 2 === 0);

// the same using forEach
let evenNumbers_1 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) evenNumbers_1.push(number);
  return evenNumbers_1;
});

// Complex scenario
const companies = [
  { name: "Company 1", category: "Finance", start: 1991 },
  { name: "Company 2", category: "Retail", start: 2000 },
  { name: "Company 3", category: "Technology", start: 1980 },
  { name: "Company 4", category: "Automotive", start: 1976 },
  { name: "Company 5", category: "Technology", start: 2012 },
  { name: "Company 6", category: "Retail", start: 1991 },
];

// Get only the retail companies
const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailCompanies);

companies.filter(function (company) {
  return company.category === "Retail";
});

// Get companies started in or after 1991 to 2000
const comFrom1991To2000 = companies.filter(function (company) {
  return 1991 == company.start;
});

console.log(comFrom1991To2000);
