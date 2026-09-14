/**b) Elaborar um programa que leia a altura de uma árvore (número de linhas)
e após exiba a árvore iniciando com 2 estrelas (asteriscos) e aumentando em
2 a cada linha. Fazer com que a árvore tenha uma margem esquerda fixa de
30 espaços e fique centralizada
 */
const prompt = require("prompt-sync")();
const linha = Number(prompt("Altura da árvore: "));
for (let i = 0; i < linha; i++) {
  let espacos = 30 + (linha - i); // calcula espaços do início
  console.log(" ".repeat(espacos) + "*".repeat(i * 2)); // exibe cada linha
}
