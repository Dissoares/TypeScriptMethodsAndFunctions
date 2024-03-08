//?usando operador ternário, usando condição para comparar valores, pode ser usado para retonar boleanos
let valorUm = 542;
let valorDois = 57;
let operadorTernario = valorUm > valorDois ? "valorUm eh Maior" : "valorUm eh Menor";
console.log("💡Valor:", operadorTernario);

//? caso booleano seja true, resultado será true, caso booleano seja false, resultado será false
let verdadeiro = true;
let resultado = verdadeiro ? true : false;
console.log("💡True ou false?:", resultado);

//? caso booleano tenha algum valor, retorna String: eh verdadeiro! independente do tipo de dados, caso NULL retorna String: eh falso!
let booleano = false;
//let booleano = null;
//let booleano = 423;
let retorno = booleano ? "eh verdadeiro!" : "eh falso!";
console.log("💡Resultado?:", retorno);

//? usando função para comparar valores e retornar boleano
let variavel = false;
retornaBooleano(variavel);
function retornaBooleano(variavel) {
  if (variavel) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

//? testando inteiro para ver se eh par ou ímpar
let numero = 7;
let parOuImpar = numero % 2 === 0 ? "Par" : "Ímpar";
console.log("Par ou ímpar?:", numero + " eh " + parOuImpar);

//?usando operador ternário para comparar valores e retonar string
let idade = 3;
let bebida = (idade >= 18) ? "cerveja" : "refrigerante";
console.log("Beba:", bebida);
