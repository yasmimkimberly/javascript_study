const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const valor = parseFloat(frm.inValor.value);
  const cliente = parseFloat(frm.inCliente.value);
  let total = 0;
  if (cliente > 15) {
    total = valor + valor;
  } else {
    total = valor;
  }
  resp.innerText = `Valor a pagar R$: ${total.toFixed(2)}`;
  e.preventDefault();
});
