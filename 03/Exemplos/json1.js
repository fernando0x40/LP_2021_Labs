let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js']
};

let json = JSON.stringify(student);
console.log(typeof json);
console.log(json);
