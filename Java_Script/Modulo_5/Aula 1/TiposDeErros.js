function calculeSquareRoot (radicand) {
    return radicand ** (1/2);
}

function calculePythagoras(side1, side2) {
    const sum = side1 ** 2 + side2 ** 2;
    return calculeSquareRoot(sum);
}

console.log(`O tamanho da hipotenuza de um triângulo de lados 3 e 4 é ${calculePythagoras(3, 4)}`)