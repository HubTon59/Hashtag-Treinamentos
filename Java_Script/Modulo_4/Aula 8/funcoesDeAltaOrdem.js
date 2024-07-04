// Funções de Alta Ordem
// - Recebem uma ou mais funções como argumento
// - Recebem uma função como resutado
// Primeira função abaixo:

function aplicarOperacao(x, operacao) { // função de Alta Ordem
    return operacao (x);
}

function dobrar(numero) {
   return  numero * 2;
}

const resultado = aplicarOperacao(5, dobrar);
console.log(resultado);

// Segunda função abaixo:

function criarIncrementador(incremento) { // Função de Alta Ordem
    return function(numero) {
        return numero + incremento;
    };
}

const incrementoPor2 = criarIncrementador(2);
console.log(incrementoPor2(5));