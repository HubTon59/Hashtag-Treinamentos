//  function nomeFuncao(PARÂMETRO) { instrução } 

function soma(numero1, numero2) {
    console.log(numero1 + numero2);
}

soma(15, 78);

// nomeFuncao(ARGUMENTO) - Chamada da função ( executa o bloco de instruções )

function calcularValorTotal(precoUnitario, quantidade) {
    let total = precoUnitario * quantidade;
    console.log("O total da sua compra é: " + total);
}

let camiseta = 45;
let quantidadeItem = 5;

calcularValorTotal(camiseta, quantidadeItem);