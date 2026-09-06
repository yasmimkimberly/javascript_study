const prompt = require("prompt-sync")();
const a = Number(prompt("Lado A: "));
const b = Number(prompt("Lado B: "));
const c = Number(prompt("Lado C: "));
if (a < b + c && b < a + c && c < a + b) {
  console.log("Lados podem formar um triângulo");
  if (a == b && b == c) {
    console.log("Tipo: Equilátero");
  } else if (b != c && a != c && a != b) {
    console.log("Tipo:  Escaleno");
  } else {
    console.log("Tipo:  Isósceles");
  }
} else {
  console.log("Não e possivel formar um triangulo, insira novos valores");
}
