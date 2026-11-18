//EJ 1
function ej1() {

    const notas = [];

    let salir = false;

    do {

        const respuesta = window.prompt("Elija una opción:\n" +
            "A. Introducir una nota al principio.\n" +
            "B. Introducir una nota al final.\n" +
            "C. Subir todas las notas X puntos.\n" +
            "D. Calcular estadísticas actuales.\n" +
            "E. Vaciar notas.\n" +
            "F. Inicializar N notas a valor X.\n" +
            "G. Eliminar la primera nota.\n" +
            "H. Eliminar la segunda nota.\n" +
            "I. Establecer a 0 todos los suspensos.\n" +
            "J. Sustituir una nota por otra.\n" +
            "K. Añadir una nota en una posición determinada.\n" +
            "L. Contar el número de suspensos.\n" +
            "M. Salir.\n"
        ).toUpperCase();

        switch (respuesta) {
            
            case "A":
                const notaPrincipio = introducirNota("Introduce una nota para colocarla al principio:");
                notas.unshift(notaPrincipio);
                console.log(`La nota ${notaPrincipio} se ha introducido al principio.`);
                console.table(notas);
                break;

            case "B":
                const notaFinal = introducirNota("Introduce una nota para colocarla al final:");
                notas.push(notaFinal);
                console.log(`La nota ${notaFinal} se ha introducido al final.`);
                console.table(notas);
                break;

            case "C":
                const puntosSubir = introducirPuntos();

                for(let i=0; i<notas.length; i++) {

                    notas[i] += puntosSubir;

                    if(notas[i] > 10) {

                        notas[i] = 10;

                    }

                }

                console.log(`Se le han subido a todas las notas ${puntosSubir} puntos.`);
                console.table(notas);

                break;

            case "D":
                if(notas.length == 0) {

                    console.log("La lista está vacía y no se pueden calcular las estadísticas.");

                }else {
                    //Falta la moda
                    console.log(`Estadísticas actuales:\n` +
                        `Moda: ${moda(notas)}\n` +
                        `Máximo: ${maximo(notas)}\n` +
                        `Mínimo: ${minimo(notas)}\n` +
                        `Media: ${media(notas).toFixed(2)}\n`
                    );

                }

                break;

            case "E":
                notas.length = 0;
                console.log("Se ha vaciado el listado de notas.");
                console.table(notas);
                break;

            case "F":
                const nuevoLength = parseInt(window.prompt("Introduce el número de notas que quieres agregar:"));
                notas.length = 0;

                for(let i=0; i < nuevoLength; i++) {
                    
                    const nota = introducirNota("Introduce la nota a agregar:");
                    notas.push(nota);
                    console.log(`Nota ${nota} introducida en la posición ${i}.`);

                }

                console.table(notas);

                break;

            case "G":

                if(notas.length == 0) {

                    console.log("No hay notas disponibles para borrar.");

                }else {

                    notas.shift();
                    console.log("Se ha eliminado la primera nota.");

                }

                console.table(notas);

                break;

            case "H":

                if(notas.length < 2) {

                    console.log("No hay nota disponible en la segunda posición.");

                }else {

                    notas.splice(1,1);
                    console.log("Se ha eliminado la segunda nota.");

                }

                console.table(notas);

                break;

            case "I":

                for(let i = 0; i < notas.length; i++) {

                    if(notas[i] < 5) {

                        console.log(`La nota ${notas[i]} está suspensa y se ha establecido a 0.`);
                        notas[i] = 0;

                    }

                }

                console.table(notas);

                break;

            case "J":
                const notaOrigen = introducirNota("Introduce la nota de origen:");
                const notaDestino = introducirNota("Introduce la nota de destino:");

                for(let i = 0; i < notas.length; i++) {

                    if(notas[i] == notaOrigen) {

                        console.log(`La nota ${notas[i]} coincide con la nota de origen y se ha sustituido por la nota de destino.`);
                        notas[i] = notaDestino;

                    }

                }

                console.table(notas);

                break;

            case "K":
                const notaInsertar = introducirNota("Introduce la nota a insertar:");
                const posicion = introducirPosicion(notas.length);

                for(let i = 0; i < notas.length; i++) {

                    if(i == posicion) {

                        console.log(`Se ha insertado la nota ${notaInsertar} en la posición ${posicion}.`);
                        notas.splice(posicion, 0, notaInsertar);

                    }

                }

                console.table(notas);

                break;

            case "L":
                let suspensos = 0;

                for(const nota of notas) {

                    if(nota < 5) {

                        suspensos++;

                    }

                }

                console.log(`Hay un total de ${suspensos} alumnos suspensos.`);

                break;

            case "M":
                salir = true;
                console.log("¡Gracias por usar nuestro programa!");
                break;

        }

    } while (!salir);
}
ej1();

//FUNCIONES EJ1
function introducirNota(mensaje) {

    let nota;

    do {

        nota = parseFloat(window.prompt(mensaje));

        if (nota < 0 || nota > 10) {
            console.log("¡Debes introducir una nota válida entre 0 y 10!");

        }else if(isNaN(nota)) {
            
            console.log("¡Debes introducir un número válido!");

        }

    } while ((nota < 0 || nota > 10) || isNaN(nota));

    return nota;

}

function introducirPuntos() {

    let puntos;

    do {

        puntos = parseFloat(window.prompt("Introduce los puntos:"));

        if (puntos < 0 || puntos > 10) {

            console.log("¡Debes introducir puntos válidos entre 0 y 10!");
            
        }else if(isNaN(puntos)) {
            
            console.log("¡Debes introducir un número válido!");

        }

    } while ((puntos < 0 || puntos > 10) || isNaN(puntos));

    return puntos;

}

function moda(array) {
    
    let moda = array[0];
    let maximoRepeticiones = 0;

    for(const numero of array) {

        let repeticiones = 0;

        for(const numeroDos of array) {

            if(numero == numeroDos) {
                repeticiones++;
            }

        }

        if(repeticiones > maximoRepeticiones) {
            maximoRepeticiones = repeticiones;
            moda = numero;
        }

    }

    return moda;

}

function maximo(array) {

    let maximo = -Infinity;

    for(let numero of array) {

        if(numero > maximo) {
            maximo = numero;
        }

    }

    return maximo;
}

function minimo(array) {

    let minimo = Infinity;

    for(let numero of array) {

        if(numero < minimo) {
            minimo = numero;
        }

    }

    return minimo;
}

function media(array) {

    let suma = 0;

    for(let numero of array) {

        suma += numero;

    }

    const media = suma / array.length;

    return media;
}

function introducirPosicion(length) {

    let posicion;

    do {

        posicion = parseInt(window.prompt("Introduce la posición empezando por el 0:"));

        if (posicion >= length) {

            console.log(`La posicion ${posicion} no se encuentra en el array.`);

        }else if(isNaN(posicion)) {
            
            console.log("¡Debes introducir un número válido!");

        }

    } while (posicion >= length || isNaN(posicion));

    return posicion;

}


//EJ 2
function ej2() {
    
}
//ej2();