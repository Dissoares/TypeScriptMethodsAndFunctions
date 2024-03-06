const IniciandoArray = 5;
let array = [];

if (IniciandoArray >= 18 && IniciandoArray <= 20) {
  console.log("Acesso liberado!");
} else if (IniciandoArray >= 41 && IniciandoArray <= 60) {
  console.log("Acesso negado para maior de 40 e menor que 60 anos");
} else {
  console.log("Acesso negado para", IniciandoArray);
}

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
