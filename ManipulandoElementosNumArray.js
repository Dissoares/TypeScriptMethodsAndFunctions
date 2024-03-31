var number = [1, 2, 3, 4.90, 5, 6, 7, 8, 9.3, 10];
var number2 = ['iten1', 'iten2', 'iten3', 'iten4', 'iten5', 'iten6', 'iten7', 'iten8', 'iten9', 'iten10'];
soma(number,number2)

number.push(11) //!adiciona um elemento a ultima posição do array

number.pop(11) //!remove o ultimo elemento do array

number.unshift('intens', 25) //!adiciona um elemento a primeira posição do array

number.shift() //!remove o primeiro elemento do array

number.splice(11, 0, '100', 'string', 235) //!adiciona um elemento em uma posição específica, nesse caso na posição 11 do array

//console.log("tamanho:", number.length)
//console.log("itens:", number)


//!manipulando arrays bidimencionais( listas )
listaDeArrays = []
listaDeArrays[0] = number
listaDeArrays[1] = number2

//console.log('listaDeArrays',listaDeArrays);


for (var i=0; i<listaDeArrays.length; i++) {
    //console.log('lista',listaDeArrays[i]); //!imprime os arrays: number e number2 inteiros nas posições de listaDeArrays
    for(var j=0; j < listaDeArrays[i].length; j++){
        console.log('item',listaDeArrays[i][j]); //!imprime juntos os itens de cada array: number + number2 na mesma linha
    }
}


function soma(number, number2) {
    var soma = number + number2;
    console.log("🚀 ~ soma ~ soma:", soma) //!usando funcção para retornar o mesmo resultado do for acima

}