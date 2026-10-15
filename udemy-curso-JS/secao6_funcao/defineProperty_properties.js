function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: true, // configurável
  });
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));
for (let chave in p1) {
  console.log(chave);
}

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("mensagem");
      }
      estoquePrivado = valor;
    },
  });
}
