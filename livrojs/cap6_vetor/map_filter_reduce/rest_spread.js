//******************************************* REST */
const pacientes = ["Ana", "Carlos", "João", "Sofia"];
const [atender, proximo, ...outros] = pacientes;
console.log(atender); // Ana
console.log(proximo); // Carlos
console.log(outros); // ["João", "Sofia"]



//******************************************* SPREAD */
const carro = { modelo: "Corsa", preco: 59500 }
const carro2 = { ...carro, ano: 2020 }
console.log(carro2)  // {modelo: "Corsa", preco: 59500, ano: 2020}