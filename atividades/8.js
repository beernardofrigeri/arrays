const prompt = require("prompt-sync")();

let filmes = [];
let novofilme;
let posicao;
let i;

for (i = 0; i < 5; i++){
    filmes.push(prompt("Informe 5 filmes, na ordem que desejar: "))
}
console.log(filmes);
posicao = Number(prompt("Agora insira a posição de um filme para o SUBSTITUIR: "));
novofilme = prompt("Por favor, insira o nome do novo filme: ");
filmes[posicao] = novofilme;
console.log(filmes);
