function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = (quantia) => {
  this.preco += quantia;
};
Produto.prototype.desconto = (quantia) => {
  this.preco -= quantia;
};
function Camiseta(nome, preco, cor) {
  //HERANÇA
  Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.construtor = Camiseta;
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  (Produto, call(this, nome, preco));
  this.material = material;

  Object.defineProperties(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.construtor = Caneca;
