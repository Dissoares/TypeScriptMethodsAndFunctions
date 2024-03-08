// ==> usando function com switch case  para receber parâmetros e retornar uma condição ou valor
//TODO  ==> usando plugin: Better Comments para mudar as cores dos comentários
//?  ==> usando plugin: Better Comments para mudar as cores dos comentários
//!  ==> usando plugin: Better Comments para mudar as cores dos comentários
const valores = [];

function switchCase(valor) {
  switch (valor) {
    case 1:
      let recebeNovoValor = 100;
      console.log("💡 ==>", recebeNovoValor);
      console.log("💡 ==>", typeof recebeNovoValor);
      break;
    case 2:
      return console.log("o valor eh 2");
    case 3:
      valores.push(
        907768,
        7872934623,
        "enviando diversos valores para um array suando push()",
        {
          nome: "nome de alguém",
          telefone: 85999038374,
          descricao:"isso eh um objeto sendo passado para uma array usando método push",
        }
      );
      console.log("💡 ==> valores:" + valores);
      console.log(
        "acessando a posição 3 do array para pegar o item (nome) no objeto==>💡 :" +
          valores[3].nome
      );
      console.log(
        "acessando a posição 3 do array para pegar o item (telefone) no objeto==>💡 :" +
          valores[3].telefone
      );
      console.log(
        "acessando a posição 3 do array para pegar o item (descricao) no objeto==>💡 :" +
          valores[3].telefone
      );
      return;
    default:
      return console.log("o valor eh diferente de 1,2 e 3");
  }
}

let valor = 3;
switchCase(valor);
