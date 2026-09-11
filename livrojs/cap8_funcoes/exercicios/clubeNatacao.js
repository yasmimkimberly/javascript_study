/**a) Elaborar um programa que leia o nome e a idade de um atleta de um
clube de natação. O programa deve exibir o nome com “-” abaixo das
letras do nome e a categoria do atleta, que pode ser “Infantil” (até 12
anos), “Juvenil” (entre 13 e 18 anos) ou “Adulto” (acima de 18 anos). O
programa deve conter as funções:
• retornarTracos() – que receba um nome como parâmetro e retorne uma linha
com “-” para as letras do nome (nos espaços, manter os espaços).
• categorizarAluno() – que receba um número como parâmetro e retorne a
categoria do aluno, conforme indicação no enunciado do exercício */
const prompt = require("prompt-sync")();
let alunos = [];

do {
  console.log("\nClube de natação\n");
  console.log("Escolha opcao abaixo:\n 1.Cadastrar aluno\n 2.Listas alunos\n");
  const opcao = Number(prompt("Opção..: \n"));
  if (opcao == 1) {
    const nome = prompt("\nNome do aluno: ");
    const idade = Number(prompt("Idade: "));
    alunos.push({ nome, idade });
    console.log("\nAluno cadastrado com sucesso!");
  } else if (opcao == 2) {
    if (alunos.length == 0) {
      console.log("\nNão há alunos cadastrados.");
      return;
    }
    for (const aluno of alunos) {
      console.log(retornarTracos(aluno.nome));
      console.log(categorizarAluno(aluno.idade));
    }
  } else {
    break;
  }
} while (true);
function retornarTracos(name) {
  return `- ${name}`;
}
function categorizarAluno(old) {
  let categoria;
  if (old <= 12) {
    categoria = "Infantil";
  } else if (old >= 13 && old <= 18) {
    categoria = "Juvenil";
  } else {
    categoria = "Adulto";
  }
  return categoria;
}
