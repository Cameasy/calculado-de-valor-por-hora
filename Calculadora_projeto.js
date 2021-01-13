
var valorHora = document.querySelector("#valor-hora")
var valorProjeto = document.querySelector("#horas-projeto")
var resposta = document.querySelector("#resposta")

//testes do console para verificar funcionalidade das chamdas id
console.log(valorHora)
console.log(valorProjeto)
console.log(resposta) 

function calcular(){
    var calculo = valorHora.value * valorProjeto.value
    resposta.textContent = "Seu projeto será avaliado em R$ " + calculo.toFixed(2) + " no total."
}