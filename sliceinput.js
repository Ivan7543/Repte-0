const prompt = require("prompt-sync")();
const text = "M'agrada aprendre Javascript";
const inici = parseInt(prompt("Introdueix la posició inicial: "));
const fi = parseInt(prompt("Introdueix la posició final: "));
const resultat = text.slice(inici, fi);
console.log(`El fragment seleccionat és: "${resultat}"`);

