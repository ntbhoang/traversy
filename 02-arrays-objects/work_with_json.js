const post = {
  id: 1,
  title: "Post 1",
  body: "This is the body",
};

// convert to json string
const jsonString = JSON.stringify(post);

console.log(jsonString, typeof jsonString);

// parse JSON
const jsonObj = JSON.parse(jsonString);

const postId = jsonObj.id;
console.log(postId);
