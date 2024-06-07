const nome = "Daniel Porto";
const dataNascimento = "2003-11-20";
const anoAtual = new Date().getFullYear();
const dataNascimentoTipoDate = new Date(dataNascimento);
const momentoAtual = new Date();
let proximoAniversario =
  momentoAtual.getMonth() > dataNascimentoTipoDate.getMonth() ||
  (momentoAtual.getMonth() === dataNascimentoTipoDate.getMonth() &&
    momentoAtual.getDay() >= dataNascimentoTipoDate.getDay())
    ? new Date(`${anoAtual + 1}-11-20`)
    : new Date(`${anoAtual}-11-20`);

const diasAteProximoAniversario = Math.floor(
  (proximoAniversario.getTime() - momentoAtual.getTime()) /
    (1000 * 60 * 60 * 24)
);
console.log(`${nome}, seu próximo aniversário é em ${diasAteProximoAniversario} dias`);
