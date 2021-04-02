var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0)
  {
    var chute = parseInt(prompt("Digite um número de 0 e 10"))
    tentativas = tentativas - 1
    if (chute == numeroSecreto)
      {
        console.log("Acertou, 'miserávi!' Realmente o número secreto era " + numeroSecreto)
        break
      } else if (chute > numeroSecreto)
        {
          alert("Chute maior que o número secreto! Você ainda tem mais " + tentativas + " tentativa(s)")
        } else if (chute < numeroSecreto)
          {
            alert("Chute menor que o número secreto! Você ainda tem mais " + tentativas + " tentativa(s)");
          }
  }
 if (chute != numeroSecreto)
    {
      console.log("Errou! O número secreto era: " + numeroSecreto)
    }