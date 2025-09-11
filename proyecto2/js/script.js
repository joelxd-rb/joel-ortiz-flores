const numero1= document.getElementById("numero1")
const numero2= document.getElementById("numero2")
const resultados=document.getElementById("resultado")

function sumar(){
    console. log("hola")
    const n1=parseFloat(numero1.value)
    const n2=parseFloat(numero2.value)
    resultados.innerHTML= n1+n2
}

numero1.addEventListener("change",sumar)
numero2.addEventListener("change",sumar)
