// Declaração de função (function hoisting)
falaOi();
function falaOi() {
  console.log("oie");
}

// First - class objects (objetos de primeira classe)
// tratar as funcao  como dado - fuction expression
const nome = function () {
  console.log("Yasmim");
};
nome();

function executaFuncao(funcao) {
  funcao();
}
executaFuncao(nome);

// arrow function
const funcaoArrow = () => {
  console.log("Arrow function");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("função");
  },
};
obj.falar();

// Parametros
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
// argumentos que sustenta todos os argumento enviados, so em function
funcao(1, 2, 3, 4, 5, 6, 7); // 28

function plus(a, b) {
  return a + b;
}
const soma = (a, b) => a + b;
console.log(soma(2, 3));
