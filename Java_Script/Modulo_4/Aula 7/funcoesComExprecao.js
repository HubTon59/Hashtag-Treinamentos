// Declaração e expeção de função

function soma(a, b) {
    return a + b;
}

let valor = soma(45, 7);
console.log(valor);

let total = soma(3 , 4) + 10;
console.log(total);


// outra forma...
let total2 = function soma(a, b) {
    return a + b;
}
console.log(total2(3 , 4));

// outra forma... "Função Anônima" - sem nome...
let total3 = function (a, b) {
    return a + b;
}
console.log(total3(30 , 4));
console.log(total3(3 , 45));
console.log(total3(56 , 4));
console.log(total3(3 , 23));

