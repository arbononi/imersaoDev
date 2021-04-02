var primeiroValor = parseInt(prompt("Digite o primeiro valor"))
var segundoValor = parseInt(prompt("Digite oo segundo valor"))

var operacao = prompt("1 -> divisão\n2 -> multiplicacao\n3 -> adição\n4 -> subtração")

if (operacao == 1) {
     var resultado = primeiroValor / segundoValor
     document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
  } else if (operacao == 2) {
             var resultado = primeiroValor * segundoValor
             document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>")
  } else if (operacao == 3) {
             var resultado = primeiroValor + segundoValor
             document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4) {
             var resultado = primeiroValor - segundoValor
             document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
  } else { document.write("<h2>Opção Inválida!</h2>") }