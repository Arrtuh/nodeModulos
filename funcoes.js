function calculaIdade(anoNascimento) {
  var data = new Date()
  return data.getFullYear() - anoNascimento;
}
module.exports.calculaIdade = calculaIdade;

function calculaIMC(peso, altura) {
  return (peso / altura ** 2);
}
module.exports.calculaIMC = calculaIMC;