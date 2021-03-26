"use strict";

alert(location.href); // mostra a URL atual
if (confirm("Ir para a Wikipédia?")) {
  location.href = "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"; // Redireciona para a Wikipédia
}