// Array.map()
const numbers = [45, 657, 1, 464];

const doubleNumbers = numbers.map((number, index, array) => {
  console.log(
    `Doubledvalue= ${number * 2} at index= ${index}`,
    "with original value=" + array[index]
  );
});

// More complexity examples
const companies = [
  { name: "Company 1", category: "Finance", start: 1981, end: 2004 },
  { name: "Company 2", category: "Retail", start: 1992, end: 2008 },
  { name: "Company 3", category: "Technology", start: 1999, end: 2007 },
  { name: "Company 4", category: "Automotive", start: 1989, end: 2010 },
  { name: "Company 5", category: "Technology", start: 1989, end: 2010 },
  { name: "Company 6", category: "Retail", start: 1981, end: 1989 },
];

// create an array with just company name and category
const array1 = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// create an array of the lenght of each company in years
const lenArr = companies.map((company) => {
  return {
    name: company.name,
    exit_years: company.end - company.start,
  };
});

console.log(lenArr);
