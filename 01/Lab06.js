// Aproximação do cosseno de x atravé de 20 termos de uma série.
"use strict";

let fatorial = (numero) => {
  let produto = 1;
  for (var i = 1; i <= numero; i++) {
    produto *= i;
  }
  return produto;
}

let cosseno = (x) => {
  let somatório = 1;
  let sinal = -1;
  for (var i = 1; i <= 20; i++) {
    somatório += sinal*(x**(2*i))/fatorial(2*i);
    sinal *= -1;
  }
  return somatório;
}

console.log('Insira um número x:');
let x = Number(readline());
console.log(`cos(x) = ${cosseno(x)}`);
