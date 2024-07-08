let a = 2.000001;

console.log(a);
console.log(a.toFixed(3));
console.log(a.toString());

let b = 'texto da aula de métodos';

console.log(b.charAt(2));
console.log(b.concat(' que eu já dominei totalmente'));
// Logo abaixo não é um método, é uma 'propriedade' da String:
console.log(b.length);
// Volta os métodos das Strings:
console.log(b.split(' '));

let c = '010110';
console.log(Number.parseInt(c));
console.log(Number.parseInt(b));
console.log(Number.isNaN(Number.parseInt(b)));
