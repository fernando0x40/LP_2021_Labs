"use strict";
/*  Utilizando a nova notação de classes de JavaScript, crie uma classe ContaCorrente com um campo que armazena o saldo. Utilize um par getter/setter para proteger este campo e impedir que o saldo fique negativo. A seguir crie outra classe ContaEspecial herdando da anterior. Uma conta especial permite que o saldo seja negativo mas impõe uma taxa de %1 sobre o valor total abaixo de zero, a cada vez que o saldo é alterado para um valor negativo. Modifique o setter da subclasse para refletir esta diferença. Teste a sua implementação adequadamente.
*/
class ContaCorrente {
  constructor(new_saldo = 0.0) {
    this.saldo = new_saldo;
  }
  set_saldo(new_value){
    if (new_value < 0) {
      console.log('Saldo inválido!: valor negativo.');
    } else {
      this.saldo = new_value;
    }
  }
  get_saldo(){
    return this.saldo;
  }
}

class ContaEspecial extends ContaCorrente {
  set_saldo(new_value){
    if (new_value < 0) {
      let taxa = -0.01 * new_value;
      console.log(`Saldo negativo, será cobrado ${taxa} como taxa.`);
      new_value -= taxa;
    }
    this.saldo = new_value;
  }
}

console.log('Digite o saldo da nova conta:');
let saldo = Number(readline());
let conta_corrente = new ContaCorrente(saldo);
console.log(`Conta Corrente ||| Saldo => R$${conta_corrente.get_saldo()}`);
conta_corrente.set_saldo(-saldo);
console.log(`Conta Corrente ||| Saldo => R$${conta_corrente.get_saldo()}`);
let conta_especial = new ContaEspecial(saldo);
console.log(`Conta Especial ||| Saldo => R$${conta_especial.get_saldo()}`);
conta_especial.set_saldo(-saldo);
console.log(`Conta Especial ||| Saldo => R$${conta_especial.get_saldo()}`);
