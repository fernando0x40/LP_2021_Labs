// Método que retorna o n-ésimo número de Fibonnacci, para demonstrar, mostra-se os 20 primeiros termos da sequência.
"use strict";

let Fibonnacci = (n) => {
  let primeiro, segundo, numero;
  primeiro = 0;
  segundo = numero = 1;
  for (var i = 3 ; i < n; i++) {
    primeiro = segundo;
    segundo = numero;
    numero = primeiro + segundo;
  }
  if (n < 3) {
    return n-1;
  }
  return numero;
}

let sequência = String(Fibonnacci(1));
for (var i = 2; i <= 20; i++) {
  sequência += ', ' + Fibonnacci(i);
}
console.log(`${sequência}`);
