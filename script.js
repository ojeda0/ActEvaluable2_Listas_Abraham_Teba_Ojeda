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
            const notaPrincipio = introducirNota();
            notas.unshift(notaPrincipio);
            console.log(`La nota ${notaPrincipio} se ha introducido al principio.`);
            console.table(notas);
            break;

        case "B":
            const notaFinal = introducirNota();
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
                    `Moda:\n` +
                    `Máximo: ${maximo(notas)}\n` +
                    `Mínimo: ${minimo(notas)}\n` +
                    `Media: ${media(notas)}\n`
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

            for(let i=0; i < notas.length; i++) {
                
                const nota = introducirNota();
                notas.push(nota);
                console.log(`Nota ${nota} introducida en la posición ${i}.`);

            }

            console.table(notas);

            break;

        case "G":
            break;

        case "H":
            break;

        case "I":
            break;

        case "J":
            break;

        case "K":
            break;

        case "L":
            break;

        case "M":
            salir = true;
            console.log("¡Gracias por usar nuestro programa!");
            break;

    }

} while (!salir);

function introducirNota() {

    let nota;

    do {

        nota = parseFloat(window.prompt("Introduce la nota:"));

        if (nota < 0 || nota > 10) {
            console.log("¡Debes introducir una nota válida entre 0 y 10!");
        }

    } while (nota < 0 || nota > 10);

    return nota;

}

function introducirPuntos() {

    let puntos;

    do {

        puntos = parseFloat(window.prompt("Introduce los puntos:"));

        if (puntos < 0 || puntos > 10) {
            console.log("¡Debes introducir puntos válidos entre 0 y 10!");
        }

    } while (puntos < 0 || puntos > 10);

    return puntos;

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