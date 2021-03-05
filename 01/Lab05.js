// Tabela de temperaturas em Celcius e Fahrenheit.
"use strict";

let celcius_to_fahrenheit = (celcius) => (9/5)*celcius + 32;

console.log('Tabela de temperaturas');
console.log('Celcius | Fahrenheit');
console.log('--------------------');
for (var i = -20; i*5 <= 100; i++) {
  console.log(`${i*5}°C | ${celcius_to_fahrenheit(i*5)}°F`);
}
