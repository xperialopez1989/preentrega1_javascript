const colores = ["rojo", "verde", "azul", "amarillo"];

let audios = new Object();
audios.rojo = document.getElementById("audioRojo");
audios.verde = document.getElementById("audioVerde");
audios.azul = document.getElementById("audioAzul");
audios.amarillo = document.getElementById("audioAmarillo");

let click = document.querySelectorAll(".color");
let ronda = 0;
let jugada = [];
let jugadaMaquina = [];
let jugadasSesion = [];
let puedeJugar = false;

//Comienzo del juego.

document
  .querySelector("#start")
  .addEventListener("click", function comenzarJuego() {
    document.querySelector("#start").classList.add("animate__zoomOut");
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

function proximaSecuencia() {
  jugada = [];
  let aleatorioEntero = colores[Math.floor(Math.random() * colores.length)];
  jugadaMaquina.push(aleatorioEntero);
  mostrarSecuencia(jugadaMaquina);
}

// funcion para reproducir audio

function reproducirAudio(id) {
  switch (id) {
    case "rojo":
      audios.rojo.play();
      break;
    case "verde":
      audios.verde.play();
      break;
    case "azul":
      audios.azul.play();
      break;
    case "amarillo":
      audios.amarillo.play();
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
      delaySonido(element);
      prenderApagarBoton(element);
    }, (i + 1) * 500);
  });
  return setTimeout(() => {
    puedeJugar = true;
  }, arr.length * 500);
}

// escuchador que registra los clicks del jugador.

click.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (puedeJugar) {
      event.preventDefault();
      let id = event.target.id;
      delaySonido(id);
      prenderApagarBoton(id);
      jugada.push(id);
      comparar(jugada, jugadaMaquina);
    } else {
      console.log("No puede jugar");
    }
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
    mejorPuntaje();
    cantidadJugadas();
    puntajePromedio();
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
  } else if (arr1.length == arr2.length) {
    ronda++;
    puedeJugar = false;
    proximaSecuencia();
  }
}

// funcion para guardar jugada en local storage y escuchador del local storage al cargar sitio.

function guardarJugada() {
  return localStorage.setItem("puntajesSesion", JSON.stringify(jugadasSesion));
}

document.addEventListener("DOMContentLoaded", function () {
  jugadasSesion = JSON.parse(localStorage.getItem("puntajesSesion"));
  if ((jugadasSesion = "null")) {
    jugadasSesion = [];
  } else {
    ("");
  }
  mejorPuntaje();
  cantidadJugadas();
  puntajePromedio();
});

// funciones para imprimir estadisticas en pantalla

function mejorPuntaje() {
  let element = document.querySelector(".mejorPuntaje");
  element.innerHTML = `
    <p>mejor puntaje: ${
      isFinite(Math.max(...jugadasSesion)) ? Math.max(...jugadasSesion) : 0
    }</p>
    `;
}
function cantidadJugadas() {
  let element = document.querySelector(".cantidadJugadas");
  element.innerHTML = `
    <p>cantidad de jugadas: ${jugadasSesion.length}</p>
    `;
}
function puntajePromedio() {
  let contador = 0;
  for (let i = 0; i <= jugadasSesion.length - 1; i++) {
    contador += jugadasSesion[i];
  }
  let element = document.querySelector(".puntajePromedio");
  return (element.innerHTML = `
    <p>puntaje promedio: ${
      isFinite(Math.round(contador / jugadasSesion.length))
        ? Math.round(contador / jugadasSesion.length)
        : 0
    }</p>
    `);
}

// funcion borrar datos del storage

document.querySelector(".borrarStorage").addEventListener("click", function () {
  localStorage.clear();
  jugadasSesion = [];
  mejorPuntaje();
  cantidadJugadas();
  puntajePromedio();
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
    `;
    document.querySelector(".pokemon img").style.width = "200px";
  });
