function calculateSquareRoot(radicand) {
    return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
    const sum = side1 ** 2 + side2 ** 2;
    return calculateSquareRoot(sum);
}

console.log(`A hipotenuza de um triângulo de lados 3 e 4 é ${calculatePythagoras(3, 4)}`);
