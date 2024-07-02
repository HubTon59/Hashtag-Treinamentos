// O "return" - é utilizado quando você quer que um calculo feito dentro da função retorne um valor para ser usado de diferentes formas dentro do código, como por exemplo, se torne o novo valor de uma varial do tipo "Let" .
// Porém o "return" é a última coisa que deve ser adcionada dentro de uma função, pois tudo depois dela não é executado.

function resolverBhaskara() {}


function calcularRaizQuadra(base) {
    console.log('Eu queria escrever isso na tela. Será que eu consigo?');
    return base**(1/2);
}

let valorRaizQuadrada = calcularRaizQuadra(4);