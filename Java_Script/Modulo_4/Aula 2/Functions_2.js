// function nomeFuncao () { instrução }

//Mensagem para iniciar o cadastro
function enviarMensagem() {
    console.log("Para continuar, você precisa informar o seu nome para cadastro!");
}
//enviarMensagem();

//Cadastro do usuário
function cadastrar(nome, sobrenome) {
    console.log(`Olá ${Nome} ${sobrenome}, você foi cadastrado com sucesso!`);
}
//cadastrar("Elton", "Oliveira");

// operações matemáticas
function banco(deposito, saque) {
    let saldo = deposito - saque;
    return saldo;
}
//console.log(banco(1000, 60));


//função Principal
function main () {
    enviarMensagem();
    cadastrar("Daniel", "Porto");
    let saldo = banco(10000, 780);
    console.log(`O saldo atual da sua conta é: ${saldo}`);
}

main();
