"use strict";

const Planetas = Object.freeze({1:'Mercúrio',2:'Vênus',3:'Marte',4:'Júpiter',5:'Saturno',6:'Urano',7:'Netuno'});
const Gravidades =  Object.freeze({'Mercúrio':0.37,'Vênus':0.88,'Marte':0.38,'Júpiter':2.64,'Saturno':1.15,'Urano':1.17,'Netuno':1.18});

console.log('Insira um peso de um objeto em Newtons:');
let peso = Number(readline());
while (isNaN(peso) || peso < 0) {
  console.log('Digite um valor válido de peso.');
  peso = Number(readline());
}
console.log('Agora, insira o número de um planeta:');
let planeta = Number(readline());
while (isNaN(planeta) || planeta < 1 || planeta > 7) {
  console.log('Digite um valor válido de planeta.');
  planeta = Number(readline());
}
let gravidade = Gravidades[Planetas[planeta]];
console.log(`Esse objeto pesa ${peso*gravidade}(N) no planeta ${Planetas[planeta]}.`);
