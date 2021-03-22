"use strict";

class FormaGeometrica {
  constructor(lados, tamanhos = []) {
    this.lados = lados;
    this.tamanhos = [];
    tamanhos.forEach((item) => {
      this.tamanhos.push(item);
    });
  }
  get_sizes() {
    return this.tamanhos;
  }
  get_sides() {
    return this.lados;
  }
  perimetro(){
    let perimetro = 0.0;
    this.get_sizes().forEach((item) => { perimetro += item});
    return perimetro;
  }
  area(){}
}
class Quadrilatero extends FormaGeometrica {
  constructor(tamanho1, tamanho2, tamanho3, tamanho4) {
    super(4, [tamanho1, tamanho2, tamanho3, tamanho4]);
  }
}
class Retangulo extends Quadrilatero {
  constructor(base, altura) {
    super(base, altura, base, altura);
  }
  get_base() {
    return super.get_sizes()[0] ;
  }
  get_altura () {
    return super.get_sizes()[1] ;
  }
  area(){
    return this.get_base() * this.get_altura();
  }
}
class Quadrado extends Retangulo {
  constructor(lado) {
    super(lado,lado);
  }
}
class Circulo extends FormaGeometrica {
  constructor(raio) {
    super(0, [raio]);
  }
  get_raio(){
    return super.get_sizes()[0];
  }
  perimetro(){
    return 2 * Math.PI * this.get_raio() ;
  }
  area(){
    return Math.PI * Math.pow(this.get_raio(), 2) ;
  }
}

let formas = [new Quadrado(3), new Quadrado(5), new Retangulo(2, 3), new Circulo(2), new Circulo(3)];
formas.forEach((item) => {
  let text = '';
  text += `Tipo: ${item.constructor.name} || `;
  if (item instanceof Circulo) {
    text += `Raio = ${item.get_raio()} || `;
  }else {
    text += `Lados =`;
    item.get_sizes().forEach((item2) => text += ` ${item2}`);
    text += ' || ';
  }
  text += `Perímetro = ${item.perimetro()} || `
  text += `Área = ${item.area()}`
  console.log(text);
});
