const people = [
  {
    firstName: "Max",
    lastName: "Nguyen",
    email: "max.nguyen@gmailcom",
    age: 38,
    phone: "111-111-111",
  },
  {
    firstName: "Tom",
    lastName: "Banks",
    email: "thomasbanks@gmailcom",
    age: 35,
    phone: "222-222-222",
  },
  {
    firstName: "Bob",
    lastName: "Uncle",
    email: "uncle.bob@gmailcom",
    age: 57,
    phone: "333-333-333",
  },
  {
    firstName: "Sarah",
    lastName: "Soe",
    email: "sarah-soe@gmailcom",
    age: 22,
    phone: "444-444-444",
  },
  {
    firstName: "Max",
    lastName: "Nguyen",
    email: "max.nguyen@gmailcom",
    age: 38,
    phone: "111-111-111",
  },
  {
    firstName: "Kitte",
    lastName: "Dan",
    email: "kitte.dan@gmailcom",
    age: 19,
    phone: "111-111-111",
  },
];

// Challenge-1: Young ppl under 25 with only name (store fullName) and email
// Solution 1
const youngPeople = people
  .map((person) => {
    return {
      name: person.firstName.concat(" ").concat(person.lastName),
      email: person.email,
      age: person.age,
    };
  })
  .filter((person) => person.age < 25);

// Solution 2
const youngPeople2 = people
  .filter((person) => person.age < 25)
  .map((person) => {
    return {
      name: person.firstName.concat(" ").concat(person.lastName),
      email: person.email,
    };
  });

// Challenge 2: Get the sum of positive numbers
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, currentValue) => acc + currentValue, 0);

// Challenge 3:
const words = ["coder", "programmer", "developer"];
const capitalizedWords = words.map((word) => {
  return word.charAt(0).toLocaleUpperCase() + word.slice(1);
});

// Challenge 4:
