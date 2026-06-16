const prompt = require("prompt-sync")();

let numeros = [];
let positivos = [];
let negativos = [];
let i;

for (i = 0; i < 6; i++) {
    numeros.push(Number(prompt("Informe um total de seis números: ")));
    const num = Number(numeros[i]);
    
    if (num >= 0) {
        positivos.push(num);
    } else {
        negativos.push(num);
    }
}

console.log("Números positivos:", positivos);
console.log("Números negativos:", negativos);