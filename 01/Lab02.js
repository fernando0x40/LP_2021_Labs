"use strict";

console.log('Insira os coeficientes de uma equação de segundo grau:');
let coeficientes = (readline()).split(' ');
while (!Number(coeficientes[0]) || !Number(coeficientes[1]) || !Number(coeficientes[2])) {
  console.log('Erro, digite números válidos:');
  coeficientes = (readline()).split(' ');
}
let a = Number(coeficientes[0]);
let b = Number(coeficientes[1]);
let c = Number(coeficientes[2]);
let delta = (b**2)-(4*a*c);
let x1 = (-b +(Math.sqrt(delta)))/(2*a);
let x2 = (-b -(Math.sqrt(delta)))/(2*a);
if ( isNaN(x1) || isNaN(x2) ) {
  print('Coeficientes de uma equação de segundo grau sem raiz.')
}else {
  print(`x1 = ${x1}\nx2 = ${x2}`);
}
