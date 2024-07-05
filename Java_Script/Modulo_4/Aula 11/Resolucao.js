// Resolução do exercício 1

function calcularMedia(nota1, nota2, nota3) {
    const mediaDasNotas = (nota1 + nota2 + nota3)/3;
    console.log (`A média desse aluno é ${mediaDasNotas}`);
    return mediaDasNotas;
}

calcularMedia (75, 60, 70);


// Resolução do exercício 2

function calcularMediaProvaFinal(nota1, nota2, nota3, notaPF) {
    const mediaDasNotas = calcularMedia(nota1, nota2, nota3);
    const mediaFinal = (mediaDasNotas + notaPF)/2;
    console.log (`A média final desse aluno é ${mediaFinal}`);
}

calcularMediaProvaFinal(75, 60, 70, 90);


// Resolução exercício 3

function convercaoDeTemperatura(temperatura) {
    const temperaturaEmFarenheit = (9/5)*(temperatura) + 32;
    console.log(`A temperatura corespondente em Farenheit é ${temperaturaEmFarenheit}`);
}


// Resolução exercício 4

function calcularImposto(valorProduto) {
    return valorProduto + 0.08875;
}

const novoValorDoProduto = calcularImposto(85);

console.log(`O valor a ser pago é ${novoValorDoProduto}`);