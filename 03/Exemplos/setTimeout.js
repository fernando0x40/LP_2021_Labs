// let timerId = setTimeout(func|code, [delay], [argA], [argB], ...);
"use strict";

function sayHi(phrase, who) {
  console.log(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, "Hello", "John");