var mensagemSecreta = ["Aprender", "não", "é", "sobre", "que", "você", "consegue", 
  "facilmente", "na", "primeira", "vez", "mas", "sobre", "o", "que", "você", "pode", 
  "descobrir.", "- 2015", "Chris", "Pine", "Aprenda", "JavaScript"];
  
  mensagemSecreta.pop();
  mensagemSecreta.push("a", "programar");
  mensagemSecreta[7] = "certo";
  mensagemSecreta.shift();
  mensagemSecreta.unshift("Programação");
  mensagemSecreta.splice(6, 5, "sabe,");
  mensagemSecreta.pop();
  mensagemSecreta.pop();
  mensagemSecreta.pop();
  mensagemSecreta.splice(4, 1, "o que");
  console.log(mensagemSecreta);
  console.log(mensagemSecreta.join(" "));