title = "JavaScript for beginner";
author = "Max Nguyen";

const library = {
  title,
  author,
  status: {
    own: true,
    reading: false,
    read: false,
  },
};

console.log(library);

// Finish reading all the books, so read = true
// library.status.read = true;

let {
  ltitle,
  lauthor,
  status: { read },
} = library;

// read = true;

library.status.read = true;
ltitle = "Python for beginner";
console.log(read);
console.log(library);
