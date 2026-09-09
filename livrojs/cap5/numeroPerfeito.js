const prompt = require("prompt-sync")();
const num = Number(prompt("Número: "));
let soma = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0 || num % i == num) {
    soma += i;
    console.log(`Divisores do 28: ${i}`);
  }
}
if (soma != 0) {
  console.log(`Soma: ${soma}`);
  console.log(`${num} é um número perfeito`);
}
