const prompt = require("prompt-sync")();

let nomes = [];
let i;

for (i = 0; i < 5; i++){
    nomes.push(prompt("Informe 5 nomes, na ordem que desejar: "))
}
console.log(nomes);
nomes.push(prompt("Por favor, adicione um nome a mais: "));
console.log(nomes);