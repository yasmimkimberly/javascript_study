const frm = document.querySelector("form");
const respo = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  const preco = parseFloat(frm.inPreco.value);
  const itemPromocional = preco * 0.5;
  const total = preco * 2 + itemPromocional;
  respo.innerText = `${nome} - Promoção: leve 3 por R$: ${total.toFixed(2)}\n O 3º Produto custa apenas RS: ${itemPromocional.toFixed(2)}`;
  e.preventDefault();
});
