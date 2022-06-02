// const elogio = () => {
//     console.log("Neymar é 10, a Trybe é 100");
// }

// setTimeout(elogio, 10000);


let timeA = 1000;
let timeB = 500;
let numA = 4;
let numB = 6;
let numC = 2;

const sum = (a, b) => a + b;

setTimeout(() => {
  numC = sum(numA, numB); //saída 3º - soma 4 + 6 -> processado em 1sec (1000milsec)
  console.log(numC);
}, timeA);

console.log(numC); // saída 1º - 2

setTimeout(() => {
  console.log(sum(numA, numC) === numB); // saída 2º - se soma (4 + 2) é igual à (6) comparação valor booleano (true) -> processado em 1/2 sec (500milsec)
}, timeB);
