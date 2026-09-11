/*a) Elaborar um programa que leia nome e nota de ‘n’ alunos até o usuário
digitar ‘Fim’ no nome. Após, verifique e exiba a maior nota da turma. Se a
maior nota for superior ou igual a 7, exiba os alunos que a obtiveram.
Caso contrário, exiba a mensagem “Não há alunos em destaque na turma”*/
const prompt = require("prompt-sync")();
let alunos = [];
do {
  const nome = prompt("Nome: ");
  if (nome == "fim") {
    break;
  }
  const nota = Number(prompt("Nota: "));
  alunos.push({ nome, nota });
  console.log("Ok! Aluno(a) cadastrado(a)");
} while (true);
{
  const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);
  console.log(`Maior nota: ${maior}`);
  if (maior >= 7) {
    const destaques = alunos.filter((aluno) => aluno.nota == maior);
    for (const destaque of destaques) {
      console.log(`-${destaque.nome}`);
    }
  } else {
    console.log("Não há alunos em destaque na turma");
  }
}
