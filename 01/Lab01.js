"use strict";

function convert_to_hms(tempo) {
  let mensagem = "";
  let horas = (tempo/360)-((tempo/360)%1);
  let minutos = ((tempo%360)/60)-(((tempo%360)/60)%1);
  let segundos = ((tempo%360)%60)-(((tempo%360)%60)%1);
  if (horas !== 0) {
    mensagem += `${horas} hora(s)`;
    if (minutos !== 0 && segundos !== 0) {
      mensagem += `, ${minutos} minuto(s) e ${segundos} segundo(s)`;
    }else if (minutos !== 0) {
      mensagem += ` e ${minutos} minuto(s)`
    }else if (segundos !== 0){
      mensagem += ` e ${segundos} segundo(s)`
    }
  }else if (minutos !== 0 && segundos !== 0) {
    mensagem += `${minutos} minuto(s) e ${segundos} segundo(s)`;
  }else if (minutos !== 0) {
    mensagem += `${minutos} minuto(s)`
  }else if (segundos !== 0){
    mensagem += `${segundos} segundo(s)`
  }if (mensagem === "") {
    return null;
  }return mensagem;
}

console.log("Digite quanto tempo demorou:");
let tempo = readline();
while (!Number(tempo)) {
  console.log('Erro, digite um número válido:');
  tempo = readline();
}
console.log(convert_to_hms(tempo) ?? 'Ocorreu um erro, tente novamente.');
