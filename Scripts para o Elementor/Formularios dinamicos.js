<script>
const showThisFieldIf = {
  select1: {
    campo1: [2],
    campo2: [3],
    campo3: [4],
  },
  campo1: {
    campoNovo1: [1, 2],
  },
  campo2: {
    campoNovo2: [2, 3],
  },
  // Adicione mais campos e condições conforme necessário
};

function conditionalFormFieldFunc() {
  function testLogic() {
    for (const [conditionalInputID, condition] of Object.entries(showThisFieldIf)) {
      const conditionalInput = setInputsElemArray(conditionalInputID);
      let match = true;
      for (const [conditionID, conditionValues] of Object.entries(condition)) {
        const inputs = setInputsElemArray(conditionID);
        const selectedInputs = [];
        inputs.forEach((input, i) => {
          if (input.checked) {
            selectedInputs.push(i);
          }
        });
        if (inputs[0].tagName === 'SELECT') {
          selectedInputs.push(inputs[0].selectedIndex);
        }
        const adjustedConditionValues = conditionValues.map(e => e - 1);
        if (!(adjustedConditionValues.every(condition => selectedInputs.indexOf(condition) > -1))) {
          match = false;
        }
      }
      if (match) {
        conditionalInput.forEach(e => e.closest('.elementor-field-group').style.display = "block");
      } else {
        conditionalInput.forEach(e => e.closest('.elementor-field-group').style.display = "none");
      }
    }
  }

  function setInputsElemArray(ID) {
    const selectors = `[name="form_fields[${ID}]"]`;
    let inputs = Array.from(document.querySelectorAll(selectors));
    if (!inputs.length) {
      inputs = Array.from(document.querySelectorAll(`[name="form_fields[${ID}][]"]`));
    }
    return inputs;
  }

  testLogic();

  /* Add event listeners */
  for (const [conditionalInputID, condition] of Object.entries(showThisFieldIf)) {
    for (const [conditionID, conditionValues] of Object.entries(condition)) {
      const inputs = setInputsElemArray(conditionID);
      inputs.forEach(input => {
        input.addEventListener('input', function () {
          testLogic();
        });
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', conditionalFormFieldFunc);
jQuery(document).on('elementor/popup/show', (event, id, instance) => {
  conditionalFormFieldFunc();
});
</script>




Neste exemplo, adicionei novos campos (campoNovo1, campoNovo2) que são exibidos com base nas opções selecionadas nos campos imovel e carro, respectivamente. Você pode continuar adicionando mais campos e condições conforme necessário. Lembre-se de que os números nas condições correspondem aos índices das opções selecionadas (começando por 1). Por exemplo, campoNovo1: [1, 2] significa que campoNovo1 será exibido se a primeira ou a segunda opção for selecionada no campo imovel. Espero que isso ajude! Se você tiver mais perguntas, fique à vontade para perguntar.