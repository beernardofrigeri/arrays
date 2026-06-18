const prompt = require("prompt-sync")();

let produtos = [];
let i;

for (i = 0; i < 5; i++){
    produtos.push(prompt("Informe 5 produtos, na ordem que desejar: "))
}
console.log(produtos);
console.log("Desculpe, o último produto que você adicionou foi retirado, confirme a sequência dada atualmente: ")
produtos.pop();
console.log(produtos);