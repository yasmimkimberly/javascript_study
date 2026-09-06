const prompt = require("prompt-sync")();
const n_chincilas = Number(prompt("Nº de chinchilas: "));
const n_anos = Number(prompt("Nº anos: "));
let trip = n_chincilas * 1;
for (let i = 1; i <= n_anos; i++) {
  console.log(`${i}º ano: ${trip} Chinchilas`);
  trip *= 3;
}
