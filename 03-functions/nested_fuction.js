// Nested fucntion related to closure

function outterFunc() {
  const x = 100;

  function innerFunc() {
    const y = 200;
    console.log(x + y);
  }

  innerFunc();
}

let res = outterFunc();
