const prompt = require("prompt-sync")();
const valor = Number(prompt("Numero: "));
if (valor % 2 == 0) {
  console.log(`${valor} é par`);
} else {
  console.log(`${valor} é impar`);
}
const resultado = valor % 2 == 0 ? `${valor} é par` : `${valor} é impar`;
console.log(resultado);
