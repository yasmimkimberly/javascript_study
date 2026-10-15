/**
 * Todos os objetos tem uma referencia interna para um protótipo (_proto_) que vem da propriedade
 * prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro
 * de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois
 * a cadeia de protótipos é usada até o topo (null) até encontar (ou não) tal membro.
 */
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}
//criação metodo que pode ser chamado sem precisar cria-lo dentro da função pessoa para cada
// individuo que chama atenção, com o prototype pode acessar e usar a funçao para ambos;
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};
// Pessoa.prototype === Pessoa.__proto__;

const p1 = new Pessoa("Luiz", "O");
const p2 = new Pessoa("Yasmim", "k");
console.dir(p1);
