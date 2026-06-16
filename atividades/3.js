const prompt = require("prompt-sync")();

let filmes = [];
let i;

for (i = 0; i < 5; i++){
    filmes.push(prompt("Informe 5 filmes, na ordem que desejar: "))
}
console.log(filmes[0]);
console.log(filmes[4]);
console.log(filmes.length);
