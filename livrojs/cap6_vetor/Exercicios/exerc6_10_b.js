/**b) Elaborar um programa que leia nome e idade de ‘n’ clientes de um
banco (até ser digitado ‘Fim’ no nome). Após, classifique e exiba os
clientes em 2 grupos: preferencial (a partir de 60 anos) e Fila normal (até
59 anos). Informe a ordem de atendimento em cada grupo de acordo com a
chegada dos clientes */
const prompt = require("prompt-sync")();
let clientes = [];
do {
  const nome = prompt("Nome: ");
  if (nome == "fim" || nome == "Fim") {
    break;
  }
  const idade = Number(prompt("Idade: "));
  clientes.push({ nome, idade });
  console.log("Ok! Cliente adicionado na fila");
} while (true);
{
  const clientesPreferenciais = clientes.filter(
    (cliente) => cliente.idade >= 60,
  );
  const filaNormal = clientes.filter((cliente) => cliente.idade <= 60);
  console.log("Fila preferencial: ");
  console.log("-".repeat(40));
  for (const cl of clientesPreferenciais) {
    console.log(`-${cl.nome}`);
  }
  console.log("Fila Normal: ");
  console.log("-".repeat(40));
  for (const cl of filaNormal) {
    console.log(`-${cl.nome}`);
  }
}
