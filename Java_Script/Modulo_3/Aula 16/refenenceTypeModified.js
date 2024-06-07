const cartao1 = {
    nome: 'Elton Oliveira',
    saldo: 100000000,
};

const cartao2 = cartao1;

console.log(cartao1);
console.log(cartao1);

cartao2.saldo -= 2000000;

console.log(cartao2);
console.log(cartao2);

const listaAlunos = ['Daniel', 'Lira', 'Alon'];
listaAlunos[3] = 'Renan';

console.log(listaAlunos);