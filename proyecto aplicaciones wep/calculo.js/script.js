const nombre=document.getElementById("nombre")
const sueldo=document.getElementById("sueldo")
const antiguedad=document.getElementById("antiguedad")

function calcular(){     
    const c=parseFloat(sueldo.value)
    const a=parseFloat(antiguedad.value)
    let bono=0
    let total=0
    if (a >= 12){
        const anio = Math.floor(a / 12);
        const meses = a % 12;
        const to = meses * 100;
        
        if (anio <= 5) {
            const b = anio * 2000;
            bono = b + to;
            total = c + bono;
        }
    } else {
        bono = a * 100;
        total = bono + c;
    }
    document.getElementById("bono_total").innerHTML = "Bono: $" + bono;
    document.getElementById("sueldo_total").innerHTML = "Total: $" + total;
    document.getElementById("nombre_resultado").innerHTML = "Nombre: " + nombre.value;
}