import {suma, resta, multiplicar, dividir, numero1, numero2, simbolo } from "./operations.js";
 
function operaciones() {
    // Obtener los valores de entrada
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const simbolo = document.getElementById("simbolos").value; // Obtener el valor seleccionado

    let resultado;

    // Realizar la operación seleccionada
    switch (simbolo) {
        case "suma":
            resultado = suma(numero1, numero2);
            break;

        case "resta":
            resultado = resta(numero1, numero2);
            break;

        case "multiplicar":
            resultado = multiplicar(numero1, numero2);
            break;

        case "dividir":
            resultado = dividir(numero1, numero2);
            break;

        default:
            resultado = "Operación no válida";
    }

    //Para que imprima por pantalla
    document.getElementById("resultado").innerHTML = resultado;

}

//Para asociar el boton con la funcion
document.getElementById("boton").addEventListener("click", operaciones);

