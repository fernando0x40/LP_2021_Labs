// let value = JSON.parse(str, [reviver]);
"use strict";

let userData = '{ "name": "John", "age": 35, "friends": [0,1,2,3]}';
let user = JSON.parse(userData);
console.log(user.friends[1]);