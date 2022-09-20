function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuro = parseFloat(valor);
  var valorEmReal = valorEmEuro * 5.2;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em R$ é " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = valorEmDolar * 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em R$ é " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}