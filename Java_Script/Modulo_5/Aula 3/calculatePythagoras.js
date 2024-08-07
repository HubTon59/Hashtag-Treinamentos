function calculateSquareRoot(radicand) {
  // console.log('O valor do meu radicando é: ', radicand);
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  //console.log(
  //  'Os tamanhos dos catetos do meu triângulo retângulo são: ',
  //  side1,
  //  side2
  //);
  const sum = side1 ** 2 + side2 ** 2;
  // console.log('O valor da variável sum é: ', sum);
  return calculateSquareRoot(sum);
}

//console.log(
//   `A hipotenusa de um triangulo de lados 3 e 4 é: ${calculatePythagoras(3, 4)}`
//);

const firstSidePart1Ref = document.getElementById('side-1-1');
const firstSidePart2Ref = document.getElementById('side-1-2');
const secondSidePart1Ref = document.getElementById('side-2-1');
const secondSidePart2Ref = document.getElementById('side-2-2');
const calculateButton = document.getElementById('calculate-hypotenuse');
const answerDiv = document.getElementById('answer');

function onCalculateButtonClick() {
  const firstSide = add(parseInt(firstSidePart1Ref.value), parseInt(firstSidePart2Ref.value));
  const secondSide = add(parseInt(secondSidePart1Ref.value), parseInt(secondSidePart2Ref.value));
  // console.log('function executed');
  answerDiv.classList.remove('hidden-element');
  answerDiv.innerHTML = `A hipotenusa de um triangulo de lados ${firstSide} e ${secondSide} é: ${calculatePythagoras(
    firstSide,
    secondSide
  )
    .toFixed(3)
    .replace(/[.,]000$/, '')}
  <div class="left-point"></div>`;
}

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

calculateButton.addEventListener('click', onCalculateButtonClick);
