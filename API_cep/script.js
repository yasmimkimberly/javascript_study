const frm = document.querySelector("form");
const inCep = document.querySelector("#inCep");
let logadouroR = document.querySelector("#inRua");
let estado = document.querySelector("#inEstado");
let bairro = document.querySelector("#inBairro");
let cidade = document.querySelector("#inCidade");

function satinizaCep(cep) {
  return (cep = inCep.value.replace(/\D/g, ""));
}

function limparFormulario() {
  logadouroR.value = "";
  estado.value = "";
  cidade.value = "";
  bairro.value = "";
}
//blur
inCep.addEventListener("mouseout", () => {
  let cep = satinizaCep(inCep.value);

  if (cep.length != 8) {
    alert("O CEP deve conter 8 digitos");
    return;
  }
});

inCep.addEventListener("input", () => {
  let cep = satinizaCep(inCep.value);

  if (cep.length != 8) {
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((transforma) => transforma.json())
    .then((resposta) => {
      if (resposta.erro) {
        limparFormulario();
        alert("CEP INVALIDO!");
        return;
      }
      console.log(resposta);

      logadouroR.value = resposta.logradouro;
      estado.value = resposta.estado;
      cidade.value = resposta.localidade;
      bairro.value = resposta.bairro;
    });
});
