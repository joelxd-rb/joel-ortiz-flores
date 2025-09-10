console.log("Multiplicacion")
// traer nuestra inforaion del formulario
const act=document.getElementById("act")
act.addEventListener("submit", function(event){
    event.preventDefault();
    const datos =new FormData(act)
    const num1=Number(datos.get("numero1"))
    const num2=Number(datos.get("numero2"))
    const resultado= num1*num2
    const res=document.getElementById("res")
    res.innerHTML=resultado
})