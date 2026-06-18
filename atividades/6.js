const prompt = require("prompt-sync")();

let tarefas = [];
let i;

for (i = 0; i < 5; i++){
    tarefas.push(prompt("Informe 5 tarefas, na ordem que desejar: "))
}
console.log(tarefas);
console.log("Desculpe, a primeira tarefa que você adicionou foi retirada, confirme a sequência dada atualmente: ")
tarefas.shift();
console.log(tarefas);