const prompt = require("prompt-sync")();

let numeros = [];
let pares = [];
let impares = [];
let i;

for (i = 0; i < 10; i++) {
    numeros.push(Number(prompt("Informe um total de dez números: ")));
    let num = Number(numeros[i]);

    if (num % 2 === 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}

console.log("Números pares:", pares);
console.log("Números ímpares:", impares);