const prompt = require("prompt-sync")();
const v_permitida = Number(prompt("Velocidade Permitida: "));
const v_condutor = Number(prompt("Velocidade do condutor: "));
const permitido = v_condutor * 0.2;
const max_permitido = v_condutor - permitido;
if (v_condutor <= v_permitida) {
  console.log(`Situação: sem multa`);
} else if (max_permitido < v_permitida) {
  console.log("Situação: Multa leve");
} else if (max_permitido > v_permitida) {
  console.log("Situação: Multa grave");
}
