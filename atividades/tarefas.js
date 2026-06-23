const prompt = require('prompt-sync')();

let tarefas = [];
let verTarefa;
let opcao;
let i;

for (i = 0; i < 5; i++) {
    tarefas.push(prompt("Informe 5 tarefas, na ordem que desejar: "));
}
for (i = 0; i < Infinity; i++) {
console.log("Menu: ");
console.log("1 - Mostrar todas as tarefas");
console.log("2 - Adicionar nova tarefa");
console.log("3 - Remover última tarefa");
console.log("4 - Mostrar quantidade de tarefas");
console.log("5 - Remover primeira tarefa");
console.log("6 - Adicionar tarefa no início");
console.log("7 - Verificar se uma tarefa existe");
console.log("8 - Mostrar primeira tarefa");
console.log("9 - Mostrar última tarefa");
console.log("10 - Sair do programa");
opcao = Number(prompt("Escolha uma opção do menu: "));

if (opcao === 1) {
    console.log(tarefas);
}
else if (opcao === 2) {
    tarefas.push(prompt("Insira a nova tarefa: "));
    console.log("As tarefas atuais são: "+ tarefas)
}
else if (opcao === 3) {
    tarefas.pop();
    console.log("As tarefas atuais são: "+ tarefas)
}
else if (opcao === 4) {
    console.log("Quantidade de tarefas atuais: " + tarefas.length)
}
else if (opcao === 5) {
    tarefas.shift();
    console.log("As tarefas atuais são: "+ tarefas)
}
else if (opcao === 6) {
    tarefas.unshift(prompt("Por favor, insira a tarefa para ser a que irá para a primeira posição: "));
    console.log("Verifique: " + tarefas)
}
else if (opcao === 7){
    verTarefa = prompt("Insira a tarefa que deseja verificar se existe: ");
    if (tarefas.includes(verTarefa)){
        console.log("A tarefa existe na lista!")
    } else {
        console.log("A tarefa não existe na lista!")
    }
}
else if (opcao === 8){
    console.log("A primeira tarefa da lista é: " + tarefas[0])
}
else if (opcao === 9){
    console.log("A última tarefa da lista é: " + tarefas[tarefas.length - 1])
}
else if (opcao === 10) {
    console.log("Saindo do programa...");
    break;
}
else {
    console.log("Opção inválida. Por favor, escolha uma opção válida.");
}
}
