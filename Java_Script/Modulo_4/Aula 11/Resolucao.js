// Resolução do exercício 1

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3;
}

const media = calcularMedia(75, 60, 80);
console.log (`A media desse aluno é ${media}`);


// Resolução do exercício 2

function calcularMediaProvaFinal(notaPF) {
    return (media + notaPF)/2;
}

const mediaFinal = calcularMediaProvaFinal(90);
console.log (`A média final desse aluno é ${mediaFinal}`);


// Resolução exercício 3

function convercaoDeTemperatura(temperatura) {
    return (9/5)*(temperatura) + 32;
}

const temperaturaEmFarenheit = convercaoDeTemperatura(35);
console.log(`A temperatura corespondente em Farenheit é ${temperaturaEmFarenheit}`);


// Resolução exercício 4

function calcularImposto(valorProduto) {
    return valorProduto + 0.08875;
}

const novoValorDoProduto = calcularImposto(85);

console.log(`O valor a ser pago é ${novoValorDoProduto}`);