// questão 1
var numeros = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];
    numeros.sort();
    console.log(numeros);

//questão 2
var times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];
    times.push("Flamengo");
    times.shift();
    times.unshift("Palmeiras");
    times.push("Gremio");
    times.unshift("São Paulo", "Santos");
    console.log(times.length);
    times.pop();
    times.sort();
    console.log(times);

//questão 3
    var atividades = ["Despertar", "Tomar banho", "Tomar café", "Estudar", "Jogar", "Almoçar", "Dormir"];
    var juncao = [atividades[3], atividades[6]];
    var favoritos = ["Festas", "Assistir anime"]; 
    var novoArray = atividades.concat(favoritos);
    atividades.reverse();
    console.log(juncao.join(" e "));
    console.log(atividades.join(" - "));
    console.log(novoArray);

//questão 4
      var cidades = ["São Paulo", "Rio de Janeiro", "Recife", "Olinda", "Ipojuca"];
      cidades.shift();
      cidades.pop();
      cidades.sort();  
      console.log(cidades)