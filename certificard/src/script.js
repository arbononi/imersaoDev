idadeAtual()
tempoProgramacao()
function idadeAtual(){
  var paragrafo = document.getElementById("Sobre")
  
  var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth(),
        dia_atual = d.getDate()
  var quantosAnos = ano_atual - 1969
  if (mes_atual < 12 || mes_atual == 12 && dia_atual < 3)
      quantosAnos--
  var p1 = "<p>Sou nascido em Sertãozinho, interior de São Paulo e, atualmente, tenho " + quantosAnos + " anos.</p>"
  paragrafo.innerHTML = p1
}

function tempoProgramacao(){
  var paragrafo2 = document.getElementById("TempoProgramacao")
  
  var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth(),
        dia_atual = d.getDate()
  var tempoProgramacao = ano_atual - 1995
    var p2 = "<p>Sou programador há mais de " + tempoProgramacao + " e comecei programando em COBOL para MS-DOS.</p>"
    
    paragrafo2.innerHTML = p2;
}