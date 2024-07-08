// Metodo nada mais é do que uma função associada a um objeto

let casa = {
    cor: 'white',
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamanhoTotalCasaEmM2: function() {
    const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
    console.log (`O tamanho da casa é de ${tamanhoTotal}m²`);
    return tamanhoTotal;
    }
};

casa.calcularTamanhoTotalCasaEmM2()