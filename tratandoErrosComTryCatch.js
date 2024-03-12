let error;

function calcular(valor) {
  console.log("O valor de entrada é:", valor);
  if (
    valor === 0 ||
    valor === null ||
    valor === undefined ||
    valor === "" ||
    isNaN(valor)
  ) {
    throw new Error(`Não é possível dividir ${valor} por dois`);
  }
  return valor / 2;
}

try {
  let valorEntrada = 200;
  console.log("O valor de envio é:", valorEntrada);
  const resultado = calcular(valorEntrada);
  console.log(`resultado de ${valorEntrada}/2 eh: ${resultado}`);
} catch (err) {
  error = err;
  console.log(error.message);
} finally {
  if (error) {
    console.log("Corrigindo erro...");

    let valorEntrada = 10;
    console.log("NovoValorEntrada", valorEntrada);
    const resultado = calcular(valorEntrada);
    console.log(`resultado de ${valorEntrada}/2 eh: ${resultado}`);
  }
}
