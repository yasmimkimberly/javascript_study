const prompt = require("prompt-sync")();

let erros = [];
let chances = 6;
console.log("Descruba o numero sorteado");
console.log(chances);
for (const erro of erros) {
  console.log(erro);
}
console.log("Dica: É um número entre 1 e 100");

for (let i = 0; i < 6; i++) {
  num = Number(prompt("Numero: "));
  const sorteado = Math.floor(Math.random() * 100) + 1;
  if (num != sorteado) {
    chances--;
    erros.unshift(num);
    for (const erro of erros) {
      console.log(erro);
    }
    return;
  }
  if (num == sorteado) {
    console.log(`Parabens!! Número sorteado:${sorteado}`);
    for (const erro of erros) {
      console.log(erro);
    }
    break;
  }
}
