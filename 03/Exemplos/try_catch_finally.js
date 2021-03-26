/*

try {
... attempt to execute the code ...
} catch ( e ) {
... handle errors ...
} finally {
... execute always ...
}

*/

"use strict";

let json = "{ bad json }";

try {
  let user = JSON.parse(json); //  Gera erro
  console.log(user.name);
} catch (e) {
  // Por causa do erro, a execução pula para aqui
  console.log("Lamentamos, os dados possuem erros...");
  console.log(e.name);
  console.log(e.message);
} finally {
  console.log('ended');
}