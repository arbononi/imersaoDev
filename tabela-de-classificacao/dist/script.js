var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
}

var rafa = {
  nome: "Rafa",
  vitorias: 1,
  empates: 4,
  derrotas: 2,
  pontos: 0 
}

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

function adicionarVitoria(i)
{
  var jogador = jogadores[i]
  jogador.vitorias++
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i)
{
  var jogador = jogadores[i]
  jogador.empates++
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i)
{
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}

function exibirJogadoresNaTela(jogadores) {
  var html = ""
  
  for (var i = 0; i < jogadores.length; i++)
    {
      jogadores[i].pontos = calculaPontos(jogadores[i])
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
      html += "</tr>"
    }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

paulo.pontos = calculaPontos(paulo)
rafa.pontos = calculaPontos(rafa)

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)