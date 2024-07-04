// ESCOPO GLOBAL - LOCAL (FUNÇÃO) - BLOCO

let global = "Sou do escopp global";

function mesagem() {
    // escopo loal da minha função
    let local = "Sou local desta função";
    console.log(global);
    console.log(local);
}

mesagem();
console.log(global);

// Escopo de bloco
if (true) {
    let bloco = "Sou do bloco do IF"
    console.log(bloco);
}