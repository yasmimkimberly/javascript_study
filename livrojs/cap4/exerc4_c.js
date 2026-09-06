const prompt = require("prompt-sync")();
const valor = parseFloat(prompt("Valor: "));
let troco;
if (valor < 1.0) {
  console.log("Valor insulficiente");
} else if (valor > 1.0) {
  troco = valor - 1.0;
  console.log("Tempo: 30 min");
  console.log(`Troco: ${troco.toFixed(2)}`);
} else if (valor > 1.75) {
  troco = valor - valor;
  console.log("Tempo: 60 min");
  console.log(`Troco: ${troco}`);
} else if (valor > 3.0) {
  troco = valor - 3.0;
  console.log("Tempo: 120 min");
  console.log(`Troco: ${troco}`);
}
