/* Traer la pantalla */
const pantalla = document.querySelector(".pantalla");

/* Llamar botones */
const botones = document.querySelectorAll(".btn");  // Esto se hace un array

/* Agregar eventListener a los botones para que funcionen al 
hacerles click */

botones.forEach(boton => {
    boton.addEventListener("click", () => {
    //    console.log(boton.textContent)  // Tremos el contenido textual del boton a la consola para ver en la web

        const botonApretado = boton.textContent;  // Guardamos el contenido del boton apretado en una variable
        
        if(boton.id === "c") {
            pantalla.textContent = "0";  // Si apretamos el boton C, la pantalla vuelve a 0
            return;  // Salimos de la funcion para que no siga ejecutando el resto del codigo
        }

        if(boton.id === "borrar") {
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0";  // Si queda un solo numero en la pantalla, al borrarlo, vuelve a 0
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);   // metodo slice de strings, que toma desde el inicio hasta el final, que con -1 indica que se borra el ultimo caracter ya que arranca desde el ultimo caracter
            }
            return;
        }

        if(boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); // eval() evalua un conjunto de strings que tenga operaciones matematicas en una sola string y no en un formato numero y lo escribe en la pantalla por la asignacion
            } catch {
                pantalla.textContent = "Error";  // Si hay un error en la evaluacion, mostramos "Error" en la pantalla
            }
            return;
        }

        if (pantalla.textContent.length === 19) {
            pantalla.textContent = "Error";
            return;  // Limitar la cantidad de caracteres en la pantalla a 20
        }

    /* Mostramos en la pantalla de la calculadora la informacion de cada boton */    

        if(pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonApretado;  // Si la pantalla tiene un 0, lo reemplazamos por el contenido del boton
        } else {
            pantalla.textContent += botonApretado;  // Cada vez que apretemos un boton, se va a agregar su contenido a la pantalla
        }
    })
})