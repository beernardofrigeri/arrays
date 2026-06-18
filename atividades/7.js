const prompt = require("prompt-sync")();

let cidades = [];
let i;

for (i = 0; i < 5; i++){
    cidades.push(prompt("Informe 5 cidades, na ordem que desejar: "))
}
console.log(cidades);
cidades.unshift(prompt("Por favor, insira mais uma cidade para ocupar a primeira posição da ordem: "));
console.log(cidades);