/**c) Elaborar um programa para uma veterinária, o qual leia o preço de uma
vacina e se o cliente possui ou não convênio. Caso possua algum convênio,
exibir uma caixa de seleção com os convênios “Amigo dos Animais” e
“Saúde Animal”. O programa deve exibir o valor do desconto (10% sem
convênio; 20% para “Amigo dos Animais”; 50% para “Saúde Animal”) e
o valor a ser pago. Criar a função:
• calcularDesconto() – que receba os parâmetros valor e taxa de desconto.
Retornar o valor do desconto.
*/
const prompt = require("prompt-sync")();
const valorVacina = Number(prompt("Valor da vacina: "));
const convenio = prompt("Possui convênio: (sim/nao): ").toLowerCase();
let tipoConvenio;
let taxaConvenio = 1;
if (convenio == "sim") {
  console.log("\n 1. Amigo dos animais\n 2. Saude animal");
  tipoConvenio = Number(prompt("Convênio: "));

  if (tipoConvenio == 1) {
    taxaConvenio = 20 / 100;
  } else if (tipoConvenio == 2) {
    taxaConvenio = 50 / 100;
  }
} else {
  taxaConvenio = 10 / 100;
}
const desconto = calcularDesconto(valorVacina, taxaConvenio);
console.log(`Desconto R$ ${desconto.toFixed(2)}`);
console.log(`A pagar R$ ${(valorVacina - desconto).toFixed(2)}`);
function calcularDesconto(valor, taxaDesconto) {
  const desconto = valor * taxaDesconto;
  return desconto;
}
