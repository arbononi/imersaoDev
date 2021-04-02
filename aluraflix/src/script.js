var relacaoFilmes = ["https://m.media-amazon.com/images/M/MV5BMTMyMTE3OTk3NF5BMl5BanBnXkFtZTcwOTkwNDc3NA@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTNlZTkxOGUtMmI0MC00MzVjLWE4NzQtNjRjMzNjMzRmMWUyXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMWIxMzQxZjAtMGFkNC00NzYwLWFiMGEtNzZhZjE5MmFiMmMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < relacaoFilmes.length; i++)
  {
    document.write("<img src=" + relacaoFilmes[i] + ">")
  }

//var relacaoFilmes = []
//var fim = "FIM"
//var filme = ""

//while (filme != fim)
//  {
//    filme = prompt("Digite o nome do filme (FIM para encerrar)")
//    if ((filme != "") && (filme != fim))
//    relacaoFilmes.push(filme)
//  }

//for (var i = 0; i < relacaoFilmes.length; i++)
//  {
//    console.log(relacaoFilmes[i])
//  }