let pedido = {
    id: 1234,
    nome: "João",
    email: "joao@exemple.com",
    lanche: 12,
    batataFrita: 6,
    suco: 4,
}

// Múltiplos parâmetros
// 3
function enviarNotificacao(nome, idPedido, email) {
    console.log(`Enviado email para ${email} confirmando o pedido de numero ${idPedido}`);
    console.log(`Mensagem: ${nome} pedido confirmado!`);
}
// a ordem dos argumentos é de extrema importância, pois tem que ser a mesma ordem dos parâmetros da função para fazer a "conexão" entre as informação de mandeira correta!
enviarNotificacao(pedido.nome, pedido.id, pedido.email); // chamada ou execução da função
//4
function processarPedido(id, item1, item2, item3) {
    let totalPedido = item1 + item2 + item3;
    console.log("Pedido: " + id + " Processado");
    console.log("O total do pedido é " + totalPedido);
    return totalPedido;
}