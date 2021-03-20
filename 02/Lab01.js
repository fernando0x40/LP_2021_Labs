"use strict";

class Matriz {
  constructor(valores) {
    this.numeros = valores;
    this.clean();
  }
  clean() {
    this.numeros = this.numeros.split('|');
    for (var linha in this.numeros) {
      this.numeros[linha] = this.numeros[linha].split(' ');
      for (var coluna in this.numeros[linha]) {
        if (this.numeros[linha][coluna] === '') {
          this.numeros[linha].splice(coluna,1);
        }else {
          this.numeros[linha][coluna] = Number(this.numeros[linha][coluna]) ;
        }
      }
    }
  }
  normalize() {
    let maior = 0;
    for (var linha in this.numeros) {
      for (var numero of this.numeros[linha]) {
        if (numero > maior) {
          maior = numero;
        }
      }
    }
    for (var linha in this.numeros) {
      for (var coluna in this.numeros[linha]) {
        this.numeros[linha][coluna] = this.numeros[linha][coluna]/maior;
      }
    }
  }
  toString(){
    let line, matriz;
    matriz = '';
    for (var linha in this.numeros) {
      line = '[';
      for (var numero of this.numeros[linha]) {
        line += ' ' + numero.toString();
      }
      line += ']';
      matriz += line.replace('[ ','[') + '\n';
    }
    return matriz.slice(0,-1);
  }
}

console.log("Digite os valores de uma matriz (separados por '|')");
let matriz = new Matriz(readline());
console.log(matriz);
matriz.normalize();
console.log(matriz);
