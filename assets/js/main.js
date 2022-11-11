const colores = ["rojo", "verde", "azul", "amarillo"];

let audioRojo = document.getElementById("audioRojo");
let audioVerde = document.getElementById("audioVerde");
let audioAzul = document.getElementById("audioAzul");
let audioAmarillo = document.getElementById("audioAmarillo");
let click = document.querySelectorAll(".color");
let ronda = 0;
let jugada = [];
let jugadaMaquina = [];
let jugadasSesion = [];
let nombreIngresado = "";
let contador = 0;

//Comienzo del juego.

document
  .querySelector("#start")
  .addEventListener("click", function comenzarJuego() {
    document
    .querySelector("#start")
    .classList.add("animate__zoomOut");
    quitarPrevioInicio();
    setTimeout(() => {
      proximaSecuencia();  
    }, 500);
  });

//funcion para quitar blur inicial

function quitarPrevioInicio() {
  let botones = document.querySelectorAll(".color");
  botones.forEach((element) => {
    element.classList.remove("previoInicio");
  });
}

//funcion para agregar blur inicial

function agregarPrevioInicio() {
  let botones = document.querySelectorAll(".color");
  botones.forEach((element) => {
    element.classList.add("previoInicio");
  });
}

//funcion para generar aleatorio incorporarlo al array jugadaMaquina.

async function proximaSecuencia() {
  jugada = [];
  let aleatorioEntero = colores[Math.floor(Math.random() * colores.length)];
  jugadaMaquina.push(aleatorioEntero);
  mostrarSecuencia(jugadaMaquina);
}

// funcion para reproducir audio

function reproducirAudio(id) {
  switch (id) {
    case "rojo":
      audioRojo.play();
      break;
    case "verde":
      audioVerde.play();
      break;
    case "azul":
      audioAzul.play();
      break;
    case "amarillo":
      audioAmarillo.play();
      break;
  }
}

// promise para reproducir funcion de audio con delay.

const delaySonido = (color) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(reproducirAudio(color));
    }, 100)
  );
};

// funcion para mostrar la secuencia del array jugadaMaquina.

function mostrarSecuencia(arr) {
  arr.forEach((element, i) => {
    setTimeout(() => {
      reproducirAudio(element);
      prenderApagarBoton(element);
    }, (i + 1) * 400);
  });
}

// escuchador que registra los clicks del jugador.


click.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let id = event.target.id;
    reproducirAudio(id);
    prenderApagarBoton(id);
    jugada.push(id);
    comparar(jugada, jugadaMaquina);
  });
});



// funcion prender y apagar boton al hacer click

function prenderApagarBoton(id) {
  document.getElementById(id).classList.add("seleccionado");
  setTimeout(function () {
    document.getElementById(id).classList.remove("seleccionado");
  }, 200);
}

// funcion que compare el array jugada con jugadaMaquina indice a indice. Si el jugador falla, se reinicia el juego.

function comparar(arr1, arr2) {
  let comparacion = arr1.every((valor, indice) => valor === arr2[indice]);
  if (!comparacion) {
    let timerInterval;
    Swal.fire({
      title: `Perdiste.. tu puntaje fue ${ronda}`,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
    jugadasSesion.push(ronda);
    guardarJugada();
    ronda = 0;
    jugada = [];
    jugadaMaquina = [];
    agregarPrevioInicio();
    document.querySelector("#fondoPokemon").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector("#fondoPokemon").style.visibility = "hidden";
    }, 6000);
    setTimeout(() => {
      document.querySelector(".pokemon").style.visibility = "visible";
    }, 2000);
    setTimeout(() => {
      document.querySelector(".pokemon").style.visibility = "hidden";
    }, 4000);
    setTimeout(() => {
      document.querySelector(".comentarioPokemon").style.visibility = "visible";
    }, 4000);
    setTimeout(() => {
      document.querySelector(".comentarioPokemon").style.visibility = "hidden";
    }, 6000);
    setTimeout(() => {
      document.querySelector("#start").classList.remove("animate__zoomOut");
    }, 6000);
    cargarJugada();
  } else if (arr1.length == arr2.length) {
    ronda++;
    proximaSecuencia();
  }
}

// funcion para guardar jugada en local storage y escuchar el local storage al cargar sitio.

function guardarJugada() {
  localStorage.setItem("puntajesSesion", JSON.stringify(jugadasSesion));
}

function cargarJugada() {
  jugadasSesion = JSON.parse(localStorage.getItem("puntajesSesion"));
  mejorPuntaje();
  puntajePromedio();
  cantidadJugadas();
};

//funcion para guardar nombre en local storage y escuchar el local storage al cargar sitio.

function guardarNombre() {
  localStorage.setItem("nombreJugador", nombreIngresado);
}

document.addEventListener("DOMContentLoaded", function () {
  nombreIngresado = localStorage.getItem("nombreJugador");
  imprimirNombre();
});

// funcion que pregunta nombre con prompt.

function preguntaNombre() {
  nombreIngresado = prompt("Cuál es tu nombre?");
    imprimirNombre();
    guardarNombre();
  }

// funcion retorno ingresara nombre en pantalla

function imprimirNombre() {
  let element = document.querySelector('.nombre');
  element.innerHTML = `
  <p>${nombreIngresado}</p>
  `
}

// funciones para imprimir estadisticas en pantalla

  function mejorPuntaje() {
    let element = document.querySelector(".mejorPuntaje");
      element.innerHTML = `
    <p>mejor puntaje: ${(Math.max(...jugadasSesion))}</p>;
    `
    } 
  function cantidadJugadas() {
    let element = document.querySelector(".cantidadJugadas");
    element.innerHTML = `
    <p>cantidad jugadas: ${jugadasSesion.length}</p>;
    `
  }
  function puntajePromedio() {
    for( let i = 0 ; i <= jugadasSesion.length - 1 ; i++) {
      contador += jugadasSesion[i]
    }
    let element = document.querySelector(".puntajePromedio");
    element.innerHTML = `
    <p>puntaje promedio: ${Math.round(contador / jugadasSesion.length)}</p>;
    `
  }

// funcion borrar datos del storage

document.querySelector(".borrarStorage").addEventListener("click", function () {
  localStorage.clear();
  jugadasSesion = [];
  mejorPuntaje();
  cantidadJugadas();
  puntajePromedio();
  preguntaNombre();
});

// probando Fetch random con pokemones

let pokemonAleatorio = Math.round(Math.random() * 800);

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let element = document.querySelector(".pokemon");
    element.innerHTML = `
      <img src='${data.sprites.front_default}'/>
      <p>${data.name}</p>
    `
    document.querySelector(".pokemon img").style.width = "200px";
    ;
  })

/*
PENDIENTES

- OK Crear funcion y aplicar promise a los sonidos
- OK Reducir funcion clickPersona
- OK Cambiar sonidos
- OK Dar estilo
- OK Ver de utilizar alguna libreria, si uso libreria intentar minificarla. Podria usar toastify para niveles.
- OK Hay que utilizar FETCH.
- OK Terminar el catch del FETCH.
- OK Aplicar local storage para guardar jugadas, y borrar storage.
- OK Colocar prompt de nombre solo si el storage está vacío.
- OK Aplicar algun operador ternario.
- OK Agrandar pokemons
-    Hacer objetos.
-    Desactivar clicks mientras se muestra jugadaMaquina NO PUDE.
-    Quitar infinity.
-    Ver de aplicar spread operator.
-    Preguntar nombre al inicio cuando no haya storage.
-    Hacer responsive.

*/
