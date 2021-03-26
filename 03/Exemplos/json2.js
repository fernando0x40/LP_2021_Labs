let user = {
  sayHi() {
    console.log("Hello");
  },
  [Symbol("id")]: 123,
  something: undefined
};

console.log(JSON.stringify(user));