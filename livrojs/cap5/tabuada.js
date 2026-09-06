const prompt = require("prompt-sync")();
const valor = Number(prompt("Numero: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${valor} X ${i} = ${valor * i}`);
}
