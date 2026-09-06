const prompt = require("prompt-sync")();
const nomeFruta = prompt("Fruta: ");
const num = Number(prompt("Número: "));
for (let i = 0; i < num; i++) {
  let print = `${nomeFruta} *`;
  console.log(print);
}
