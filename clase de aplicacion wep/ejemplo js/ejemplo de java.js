//poner una variable
saludar("nemo")
function saludar(nombre){
    console.log("hola " + nombre + " con java")
}
// traer nuestra inforaion del formulario
const formulario=document.getElementById("formulario")
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const datos =new FormData(formulario)
    console.log(datos.get("nombre"))
    console.log(datos.get("edad"))
})