"use strict";

console.log('Insira as três notas do aluno:');
let notas = (readline()).split(' ');
while (!Number(notas[0]) || !Number(notas[1]) || !Number(notas[2])) {
  console.log('Erro, digite números válidos:');
  notas = (readline()).split(' ');
}
for (var i = 0; i < notas.length; i++) {
  notas[i] = Number(notas[i])
}
let media = (notas[0]+notas[1]+notas[2])/3;
if (media >= 7.0) {
  print(`Média = ${media} - Aprovado`);
} else if (media < 7.0 && media >= 5.0){
  print(`Média = ${media} - Recuperação`);
} else {
  print(`Média = ${media} - Reprovado`);
}
