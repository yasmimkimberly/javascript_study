const frm = document.querySelector("form");
const resposta = document.querySelector("#inResposta");
const estado = document.querySelector("#inEstado"); // state == UF == estado
const cidade = document.querySelector("#inCidade"); // city
const bairro = document.querySelector("#inBairro"); // neighborhood == bairro
const rua = document.querySelector("#inRua");
const taxa = document.querySelector("h2");

const regioes = {
  norte: ["AC", "AM", "AP", "PA", "RO", "RR", "TO"],
  nordeste: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
  centroOeste: ["DF", "GO", "MT", "MS"],
  sudeste: ["ES", "MG", "RJ", "SP"],
  sul: ["PR", "RS", "SC"],
};

let regiaoUF;
function getRegiao(UF) {
  Object.keys(regioes).forEach((regiao) => {
    if (regioes[regiao].find((r) => r == UF)) {
      regiaoUF = regiao;
    }
  });
  return regiaoUF;
}

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  let cep = frm.inCep.value.replace(/\D/g, "");
  let url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

  if ((cep.lenght = !8)) {
    alert("O cep deve possui apenas 8 digitos");
    return;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.type) {
        alert("CEP invalido, tente novamente");
        return;
      }

      estado.value = data.state;
      rua.value = data.street;
      cidade.value = data.city;
      bairro.value = data.neighborhood;
      let taxaUF = data.state;

      if (getRegiao(taxaUF) == "norte") {
        taxa.textContent = `A taxa para a região Norte R$ 29,90`;
      } else if (getRegiao(taxaUF) == "nordeste") {
        taxa.textContent = `A taxa para a região Nordeste R$ 24,90`;
      } else if (getRegiao(taxaUF) == "sudeste") {
        taxa.textContent = `A taxa para a região Sudeste R$ 19,90`;
      } else if (getRegiao(taxaUF) == "sul") {
        taxa.textContent = `A taxa para a região Sul R$ 21,90`;
      } else {
        taxa.textContent = `A taxa para a região Centro-Oeste R$ 22,90`;
      }
    });

  //console.log(getRegiao("AP"));
});
