const { calculaIdade, calculaIMC } = require('./funcoes');
const anoNasc = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

console.log(`A idade é: ${calculaIdade(anoNasc)}`);
console.log(`O IMC é: ${calculaIMC(peso, altura)}`);