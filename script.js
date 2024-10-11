function agregarMensaje(mensaje) {
    const chat = document.getElementById('chat');
    const nuevoMensaje = document.createElement('p');
    nuevoMensaje.textContent = mensaje;
    chat.appendChild(nuevoMensaje);
}

function agregarOpciones(opciones, callback) {
    const chat = document.getElementById('chat');
    
    opciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.onclick = () => callback(index + 1);
        chat.appendChild(boton);
    });
}

function abrirPuerta(puerta) {
    switch(puerta) {
        case 1:
            agregarMensaje("Has entrado a un cuarto oscuro. Hay un pasillo a la izquierda y una escalera a la derecha.");
            agregarOpciones(["Ir por el pasillo oscuro", "Subir las escaleras"], elegirCamino);
            break;
        case 2:
            mostrarSusto();
            agregarMensaje("La puerta derecha te lleva a una sala vacía... O eso parece. ¡Cuidado!");
            agregarOpciones(["Sí", "No"], investigarSala);
            break;
        case 3:
            agregarMensaje("La puerta del medio te lleva a un sótano. Escuchas ruidos extraños.");
            agregarOpciones(["Abrir la caja", "Entrar al túnel"], explorarSotano);
            break;
        case 4:
            agregarMensaje("Te encuentras en una biblioteca polvorienta. Algo se mueve entre los libros.");
            agregarOpciones(["Investigar", "Salir de la biblioteca"], biblioteca);
            break;
        default:
            agregarMensaje("Opción no válida.");
    }
}

function elegirCamino(decision) {
    if (decision === 1) {
        mostrarSusto();
        agregarMensaje("Un espectro aparece en el pasillo oscuro. ¡No puedes escapar!");
    } else if (decision === 2) {
        agregarMensaje("Subes las escaleras y llegas a una puerta cerrada. ¿Intentas abrirla?");
        agregarOpciones(["Sí", "No"], (abrir) => {
            if (abrir === 1) {
                agregarMensaje("¡La puerta estaba sellada! Algo te empuja hacia abajo...");
                mostrarSusto();
                agregarMensaje("Caes al vacío. ¡Has muerto!");
            } else {
                agregarMensaje("Decides no arriesgarte. Encuentras una ventana por donde salir.");
            }
        });
    } else {
        agregarMensaje("Opción no válida.");
    }
}

function investigarSala(decision) {
    if (decision === 1) {
        mostrarSusto();
        agregarMensaje("Mientras investigabas, una figura oscura te ataca desde las sombras.");
    } else if (decision === 2) {
        agregarMensaje("Decides no investigar la sala y te vas, pero sientes que algo te sigue...");
    } else {
        agregarMensaje("Opción no válida.");
    }
}

function explorarSotano(decision) {
    if (decision === 1) {
        agregarMensaje("¡Encuentras un mapa dentro de la caja! Te ayudará a salir.");
    } else if (decision === 2) {
        mostrarSusto();
        agregarMensaje("El túnel te lleva a una criatura oculta. ¡No hay escapatoria!");
    } else {
        agregarMensaje("Opción no válida.");
    }
}

function biblioteca(decision) {
    if (decision === 1) {
        mostrarSusto();
        agregarMensaje("Un libro cae y una sombra emerge detrás de los estantes. ¡Te persigue!");
    } else if (decision === 2) {
        agregarMensaje("Decides no arriesgarte y sales corriendo. Te sientes aliviado... por ahora.");
    } else {
        agregarMensaje("Opción no válida.");
    }
}

function mostrarSusto() {
    const imagenSusto = document.getElementById('sustoImagen');
    const overlay = document.getElementById('overlay');
    const sonidoSusto = document.getElementById('sustoSonido');

    overlay.style.display = 'block';
    imagenSusto.style.display = 'block';
    sonidoSusto.play();

    setTimeout(() => {
        imagenSusto.style.display = 'none';
        overlay.style.display = 'none';
    }, 3000);
}
