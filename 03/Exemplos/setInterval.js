"use strict";

// Repete com intervalo de 2 segundos
let timerId = setInterval(() => console.log('tick'), 2000);
// Para após 5 segundos
setTimeout(() => {
  clearInterval(timerId);
  console.log('stop');
}, 5000);