const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = frm.inNome.value;
  let preco = parseFloat(frm.inPreco.value);
  let promocao = 2 * preco;
  resp.innerText = `Promoção de ${nome}\n 
  Leve 2 por apenas R$: ${promocao.toFixed(2)}`;
});
