function sum(...numbers) {
  let total = 0;
  for (const num of numbers) total += num;

  return total;
}

// object as argument
function login(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 111,
  name: "Max",
};

const info = login(user);
console.log(info);

// array as argument
function getRandomArr(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  console.log(item);
}

const values = [1, 2, 3];

getRandomArr(values);
