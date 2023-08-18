'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')
const botaoMultiplicar = document.getElementById('multiplicar')

function somar(){
    const numero01 = Number(document.getElementById('numero01').value)

    const numero02 = Number(document.getElementById('numero01').value)

    const resultado = document.getElementById('resultado')

    const total = numero01 + numero02
    resultado.textContent = total
}

function identificar () {

    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if (numero > 0){
             resultado.textContent = 'POSITIVO'
    } else if(numero < 0){
        resultado.textContent = 'NEGATIVO'
    }else{
        resultado.textContent = 'ZERO'
    }
}

function media (){

    const numero01_item3 = Number(document.getElementById('numero01_item3').value)
    const numero02_item3 = Number(document.getElementById('numero02_item3').value)
    const numero03_item3 = Number(document.getElementById('numero03_item3').value)
    const numero04_item3 = Number(document.getElementById('numero04_item3').value)
    const exame_item3 = Number(document.getElementById('exame_item3').value)

    const resultado = document.getElementById('resultado_3')

    const media = (numero01_item3 + numero02_item3 + numero03_item3 + numero04_item3) / 4
    resultado_item3.textContent = media


    if(media >= 7){
        resultado_item3.textContent =`APROVADO ${media}`
        
    }else if (media < 7){

        const exame = document.getElementById('exame')
        exame.classList.toggle('exame-reprovado')
        resultado_item3.textContent = 'REPROVADO'
        
        const resultado_item3 = (media_item3 + exame)
        if(mediaExame > 7){
            resultado.textContent = 'APROVADO COM EXAME'
        }
         
    }
}

function multiplicar () {

    const numero01_item4 = Number(document.getElementById('numero01_item4').value)
    const numero02_item4 = Number(document.getElementById('numero02_item4').value)

    const resultado = document.getElementById('resultado_item4')

    const multiplicar =(numero01_item4 * numero02_item4)
    resultado_item4.textContent = multiplicar


    if(multiplicar >= 30){
        resultado_item4.textContent = `${multiplicar}`
    }else(multiplicar < 30);{

        resultado_item4.textContent = 'Não é possivel ver o resultado menor ou igual a que 30'

    }



}



botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', media)
botaoMultiplicar.addEventListener('click', multiplicar)