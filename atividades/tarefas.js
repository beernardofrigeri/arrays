const prompt = require('prompt-sync')(); // puxa a biblioteca que usamos --> "prompt-sync" (obrigatório a inclusão, isso é o básico que o professor cobra)

let tarefas = []; // criação de uma array VAZIA, vai ser preenchida pelo USUÁRIO --> lembrar disso, uma função vai encher a lista
let verTarefa; // variável para ver alguma tarefa específica, depois vai ser melhor explicado
let opcao; // variável que disponibiliza a opção do usuário sobre as tarefas, "
let i; // variável padrão para fazer o repeat, a repetição de perguntas do sistema.

for (i = 0; i < 5; i++) {
    tarefas.push(prompt("Informe 5 tarefas, na ordem que desejar: "));
} // laço de repetição para que o USUÁRIO CRIE as tarefas em que ELE desejar 
for (i = 0; i < Infinity; i++) { // cria o laço de repetição que PEDE o que o USUÁRIO deseja FAZER. laço com "Infinity", significa que nunca vai parar até o usuário mandar para opção 10
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
opcao = Number(prompt("Escolha uma opção do menu: ")); // capta a decisão do usuário com a let opcao que está comentada antes, o número inserido pelo usuário é validado e contabilizado para que tenha uma resposta especifica para cada opção, veja:

if (opcao === 1) { // exemplo: se o usuário digitar "1" no terminal, vai mostrar todas as tarefas e pedir novamente o que ele deseja fazer, cada else if se baseia na opção do usuário
    console.log(tarefas);
}
else if (opcao === 2) {
    tarefas.push(prompt("Insira a nova tarefa: ")); // comando .push --> esse comando permite adicionar mais uma tarefa na array, na lista, deixando que o usuário escreva o que quiser.
    console.log("As tarefas atuais são: "+ tarefas)
}
else if (opcao === 3) {
    tarefas.pop(); // esse comando (.pop) faz o contrário do último, limpa remove o último item existente no array.
    console.log("As tarefas atuais são: "+ tarefas)
}
else if (opcao === 4) {
    console.log("Quantidade de tarefas atuais: " + tarefas.length) // --> esse comando mostra a QUANTIDADE de tarefas em NÚMEROS, ex.: "Quantidade de tarefas atuais: 5"
}
else if (opcao === 5) {
    tarefas.shift(); // esse comando (.shift) remove a primeira tarefa, eliminando a deixando só as outras
    console.log("As tarefas atuais são: "+ tarefas)
}
else if (opcao === 6) {
    tarefas.unshift(prompt("Por favor, insira a tarefa para ser a que irá para a primeira posição: ")); // esse comando (.unshift) permite adicionar uma tarefa que ocupe a PRIMEIRA posição da array, lista, diferente do .push que só asiciona, esse adiciona e a coloca em primeiro lugar
    console.log("Verifique: " + tarefas)
}
else if (opcao === 7){ // primeiro olhe os comentário abaixo dessa função para entender o que ela faz, depois volte nessas linhas!
    verTarefa = prompt("Insira a tarefa que deseja verificar se existe: ");
    if (tarefas.includes(verTarefa)){ // se a tarefa existir
        console.log("A tarefa existe na lista!") // o sistema diz que a tem
    } else { // se não existir
        console.log("A tarefa não existe na lista!") // ele avisa que não tem
    }
}
// esse comando (.includes) nem o professor explicou, mas assim, ele verifica se tem a tarefa que tu procuras,
    // ex.: 
    // Insira a tarefa que deseja verificar se existe: Varrer a casa
    // A tarefa existe na lista!
// o que aconteceu: quando tu digitou o que procurava, o sistema fez uma busca na lista, na array, com a função let verTarefa. Quando tu digita, o sistema compara o que tu digitou com os itens dentro da array, que é a tua lista, e se der certo, se o que tu procura existir, ele tem a resposta que "sim" e se não existir ele afirma que "não", veja nas linhas anteriores.
else if (opcao === 8){
    console.log("A primeira tarefa da lista é: " + tarefas[0]) // aqui é bem simples, mostra a primeira tarefa. numa array, os itens não começam em 1, e sim em 0, então numa lista assim: "[arroz, feijão, banana, maçã, cereal]", o número [0] da lista é o "arroz". para ver o primeiro número de uma array então buscamos o número 0, dentro de colchetes, depois da variável.
}
else if (opcao === 9){
    console.log("A última tarefa da lista é: " + tarefas[tarefas.length - 1]) // como a array pode aumentar de tamanho durante o programa, não sabemos qual será o índice da última tarefa e qual seu número, então pegamos a quantidade de tarefas no total, e tiramos um, pois toda array começa em 0, removendo um número (como está ali, tarefas.lenght - 1), temos o número da última tarefa
}
else if (opcao === 10) {
    console.log("Saindo do programa...");
    break; // a saída do programa eu que quis fazer, mas é isso, o break; finaliza o laço de repetição que foi criado antes, mesmo estando dentro dele.
}
else {
    console.log("Opção inválida. Por favor, escolha uma opção válida."); // aqui é que, se qualquer outra coisa for digitada, fora as opções válidas, ele cancela a ação e pede novamente o que o usuário quer fazer.
}
} // e essa chave fecha o laço de repetição Infinito que criamos antes.
