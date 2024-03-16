let diaAtual = {id: 2}.id;
let resultado = "";

let diasSemana = [
  { id: 1, dia: "Domingo" },
  { id: 2, dia: "Segunda" },
  { id: 3, dia: "Terça" },
  { id: 4, dia: "Quarta" },
  { id: 5, dia: "Quinta" },
  { id: 6, dia: "Sexta" },
  { id: 7, dia: "Sábado" },
];

if (diaAtual == 0 || diaAtual > diasSemana.length) {
  console.log("O número: "+ diaAtual +" não eh válido, digite um número de 1 a 7 correspondente ao dia da semana");
} else {
  switch (diaAtual) {
   case 1: case 2: case 3: case 4: case 5: case 6: case 7: 
      resultado = diasSemana[diaAtual-1].dia;
      break;

    default:
      return  console.log("o tipo '"+ typeof diaAtual +"' com o valor: {"+ diaAtual+"} não eh vádido!:")
  }
}

console.log(resultado);
