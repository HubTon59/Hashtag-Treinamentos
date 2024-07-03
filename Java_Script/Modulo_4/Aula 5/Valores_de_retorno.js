// Retorno de uma função

let pedido = {
    id: 1234,
    nome: "João",
    email: "joao@exemple.com",
    lanche: 12,
    batataFrita: 6,
    suco: 4,
}

function enviarNotificacao(nome, idPedido, email) {
    //simular o envio de um email
    console.log(`Enviado email para ${email} confirmando o pedido de numero ${idPedido}`);
    console.log(`Mensagem: ${nome} pedido confirmado!`);
    // não possui retorno explícito
}

enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// Função principal que irá calcular e retornar o valor de um pedido

function processarPedido(id, item1, item2, item3) {
    let totalPedido = item1 + item2 + item3;
    console.log("Pedido: " + id + " Processado");
    console.log("O total do pedido é " + totalPedido);
    return totalPedido; // Aqui encerrou a função, tudo após, não é executado...
}

let retornoDaFuncao = processarPedido(pedido.id, pedido.lanche, pedido.batataFrita, pedido.suco);

console.log(retornoDaFuncao);
//ou...
console.log(retornoDaFuncao + retornoDaFuncao);

