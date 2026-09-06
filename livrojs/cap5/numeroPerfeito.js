const prompt = require("prompt-sync")();
const num = Number(prompt("Número: "));
let soma = 1;
let resul = [];

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    soma += num / i;
    resul.push(num / i);
  }
}
for (let i = 1; i < resul.length; i++) {
  if (resul[i] == num) {
    resul.pop(num);
  }
  console.log(resul[i]);
  console.log(typeof resul);
}
