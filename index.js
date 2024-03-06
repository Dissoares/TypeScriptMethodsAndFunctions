const IniciandoArray = 5;
let array = [];


//iniciando condição com if e else
if (IniciandoArray >= 18 && IniciandoArray <= 20) {
  console.log("Acesso liberado!");
} else if (IniciandoArray >= 41 && IniciandoArray <= 60) {
  console.log("Acesso negado para maior de 40 e menor que 60 anos");
} else {
  console.log("Acesso negado para", IniciandoArray);
}

//iniciando condição com for, adcionando e removendo itens de um array com .push(item) e .pop(item)
for (i = 0; i <= IniciandoArray; i++) {
  array.push(i); // <== adicionando cada item na ultima posicação do array
  console.log("💡 ==>:", array);
  if (array.length > IniciandoArray) {
    for (a = array.length; a >= 1; a--) {
      array.pop(a); // <== removendo cada item na ultima posicação do array
      console.log("💡 ==>:", array);
    }
  }
}

//convertendo string em inteiro
let valorString = '100';
let converterParaNumero = Number(valorString);
console.log(typeof converterParaNumero);
console.log("💡 ==> converterParaNumero:", converterParaNumero)

//convertendo inteiro para string
let converterParaString = String(converterParaNumero);
console.log(typeof converterParaString);
console.log("💡 ==> converterParaString:", converterParaString)
