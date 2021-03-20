"use strict";

class Complex {
  constructor(numberR,numberI) {
    this.real = numberR;
    this.imaginario = numberI;
  }

  static Zero = 0;
  static One = 1;
  static Imaginary = 'i';

  get_real () {
    return this.real;
  }
  get_imaginario () {
    return this.imaginario;
  }
  static get_Zero(){
    return this.Zero;
  }
  static get_One(){
    return this.One;
  }
  static get_Imaginary(){
    return this.Imaginary;
  }
  set_real (realn) {
    this.real = realn;
  }
  set_imaginario (imaginarion) {
    this.imaginario = imaginarion;
  }
  soma (complex2) {
    return new Complex(this.get_real() + complex2.get_real(), this.get_imaginario() + complex2.get_imaginario());
  }
  multiplica (complex2) {
      return new Complex(this.get_real() * complex2.get_real(), this.get_imaginario() * complex2.get_imaginario());
  }
  toString () {
     return '[' + this.get_real().toString() + ' + ' + this.get_imaginario().toString() + Complex.get_Imaginary() + ']';
  }
}

console.log('Digite um número real: ');
let numReal = Number(readline());
let numImaginario = Number(readline());
let complexo1 = new Complex(numReal, numImaginario);
let complexo2 = new Complex(numReal*2, numImaginario*2);
console.log(complexo1);
console.log(complexo2);
console.log(complexo1.soma(complexo2));
console.log(complexo1.multiplica(complexo2));
