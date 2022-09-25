//var nome = " Empawer Code";
//var resumo = "abaixo resumo de suas notas";
//var notaPrimeiroBimestre = 9;
//var notaSegundoBimestre = 1;
//var notaTerceiroBimestre = 8;
//var notaQuartoBimestre = 9;
//var somaDeNota =
//notaPrimeiroBimestre +
//notaSegundoBimestre +
//notaTerceiroBimestre +
//notaQuartoBimestre;

//var notaFinal =
//(notaPrimeiroBimestre +
//notaSegundoBimestre +
//notaTerceiroBimestre +
//notaQuartoBimestre) /
4;
//var notaFixada = notaFinal.toFixed(2);
//console.log(" Bem vinda " + nome);
//console.log(" Segue " + resumo);
//console.log(somaDeNota);
//console.log(notaFinal);

function Calcular() {
  var notaPrimeiroBimestre = document.getElementById("PrimeiroBimestre");
  var notaPrimeiroBimestre = PrimeiroBimestre.value;
  var n1 = parseFloat(notaPrimeiroBimestre);
  var notaSegundoBimestre = document.getElementById("segundobimestre");
  var notaSegundoBimestre = segundobimestre.value;
  var n2 = parseFloat(notaSegundoBimestre);
  var notaterceirobimestre = document.getElementById("terceirobimestre");
  var notaterceirobimestre = terceirobimestre.value;
  var n3 = parseFloat(notaterceirobimestre);
  var notaQuartoBimestre = document.getElementById("QuartoBimestre");
  var notaQuartoBimestre = QuartoBimestre.value;
  var n4 = parseFloat(notaQuartoBimestre);

  var MediaFinal = (n1 + n2 + n3 + n4) / 4;
  console.log(MediaFinal);
  var resultadoFinal = document.getElementById("valorMediaFinal");
  resultadoFinal.innerHTML = "Sua média é: " + MediaFinal;

  console.log(notaPrimeiroBimestre);
  console.log(notaSegundoBimestre);
  console.log(notaterceirobimestre);
  console.log(notaQuartoBimestre);
  console.log(valorMediaFinal);
}
