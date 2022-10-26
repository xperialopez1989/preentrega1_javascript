
/****************************************************************************************************************

NOTAS:

Necesito utilizar .addEventListener para escuchar a que color el jugador hace click, esos clicks deberían guardarse en un array "jugada", ese array tiene que ser comparado indice a indice con otro array "jugadaMaquina".
Que es "jugada"? es un array que va incorporando las selecciones del jugador. Tiene que haber una variable "seleccionado" que vaya tomando cada eleccion del jugador y una función que vaya incorporando los datos de "seleccionado" en el array "jugada"

Primero que nada tengo que lograr que el array jugada funcione y que incorpore cada una de las jugadas del jugador. 

Estudiar setTimeOut se usa en cada solución que vi. También estudiar event.target.dataset
Ver de poner un boton "comenzar"

Extracto de proyecto similar: The humanTurn() function needs to be executed after the computer’s sequence is over so we cannot call it immediately. We need to add an artificial delay and calculate when the computer will be done with the sequence of button taps.

RESUMEN:

1. Necesito que se genere un valor aleatorio y se guarde en el array "jugadaMaquina" HECHO
2. Luego necesito que el programa se PAUSE y espere a que el jugador ingrese un color semi HECHO
3. Ese valor elegido debe guardarse en el array "jugada" HECHO
4. El programa continúa y va comparando cada ingreso del jugador con cada valor del indice "jugadaMaquina"
5. Si se comete un error el juego termina, si los array son iguales se vuelve al paso 1.

Se me ocurre una idea alternativa, que las jugadas de la máquina se generen de primera todas juntas, luego los clicks del jugador se van comparando con cada indice.




****************************************************************************************************/



class jugador {
  constructor(nombre, ciudad, puntaje) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.puntaje = puntaje;
  }
}

const jugador1 = new jugador("Mariano", "Buenos Aires", 7);
const jugador2 = new jugador("Zeca", "Rio de Janeiro", 8);
const jugador3 = new jugador("Jhon", "Miami", 4);
const jugador4 = new jugador("Radamel", "Bogotá", 10);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let esRojo=false;
let esVerde=false;
let esAzul=false;
let esAmarillo=false;
let jugada = [];
let jugadaMaquina = [];
let valores = document.querySelectorAll(".color");
console.log(valores)

function quitarSeleccionado(color) {
  let elemento = document.querySelector(color);elemento.classList.remove(`seleccionado`);
}

quitarSeleccionado('.rojo')
quitarSeleccionado('.verde')
quitarSeleccionado('.azul')
quitarSeleccionado('.amarillo')


///////////////////////////JUGADAS MAQUINA

let generarRondas = (e) => {
  let rondas = e.target.value
  for (i=1;i<=rondas;i++) {

    let aleatorioEntero = Math.floor(Math.random() * valores.length);
    jugadaMaquina.push(aleatorioEntero);
    }
    console.log(jugadaMaquina)
    mostrarRonda()
}

function mostrarRonda() {
  let i = 0
  let movimientos = setInterval(function () {
    jugadaMaquina[i];
    
    i++;
    if (i>= jugadaMaquina.length) {
      clearInterval(movimientos);
      switch (i) {
        case 0:
          quitarSeleccionado('.rojo')
        break;
        case 1:
          quitarSeleccionado('.verde')
        break;
        case 2:
          quitarSeleccionado('.azul')
        break;
        case 3:
          quitarSeleccionado('.amarillo')
        break;
      }
    }
  }, 600)
}




document.addEventListener(`input`,generarRondas)

////////////////////////////JUGADAS PERSONA

// necesito una funcion que registre los clicks del jugador

function clickPersona() {
  
  document.querySelector(".rojo").addEventListener("click",function() {
    esRojo = true;
    incorporarSeleccionado()
    if (jugada.length === jugadaMaquina.length) {
      console.log(jugada)
      comparar()
    }
  }) 
  document.querySelector(".verde").addEventListener("click",function() {
    esVerde == true;
    incorporarSeleccionado()
    if (jugada.length === jugadaMaquina.length) {
      console.log(jugada)
      comparar()
    }
  })
  document.querySelector(".azul").addEventListener("click",function() {
    esAzul = true;
    incorporarSeleccionado()
    if (jugada.length === jugadaMaquina.length) {
      console.log(jugada)
      comparar()
    }
  })
  document.querySelector(".amarillo").addEventListener("click",function() {
    esAmarillo = true;
    incorporarSeleccionado()
    if (jugada.length === jugadaMaquina.length) {
      console.log(jugada)
      comparar()
    }
  })
  } 

// necesito una funcion que dependiendo cual fue el click del usuario incorpore ese valor al array jugada.

function incorporarSeleccionado() {

    if (esRojo == true) {
      esRojo = false
      return jugada.push(0);  
    } else if (esVerde == true) {
      esVerde = false
      return jugada.push(1)
    } else if (esAzul == true) {
      esAzul = false
      return jugada.push(2)
    } else if (esAmarillo == true) {
      esAmarillo = false
      return jugada.push(3)
  }
}
 

// necesito una funcion que compare el array jugada con jugadaMaquina indice a indice, o al menos luego de finalizado el length correspondiente a esa ronda. La funcion deberia tomar como parametro el numero de ronda en la que estoy. A su vez al finalizar cada ronda, debe vaciar el array jugada.


  

  function comparar() {
    if (jugada.length === jugadaMaquina.length) {
      let comparacion = jugada.every((valor,indice) => valor === jugadaMaquina[indice])
      if (comparacion) {
        return alert(`Excelente, lo lograste.`)
      } else {
        return alert(`Perdiste..`)
      }
    }
  }
  
clickPersona()

/*
 Que me falta?

 En cada jugada debe marcarse el indice de la maquina.
 Si supero el primer nivel, el juego debe adaptar la comparacion al segundo nivel y luego al tercer nivel.
 Aplicar JSON

 */































/* document.querySelector(".verde").addEventListener("click",function() {
  jugada.push(1)
  console.log(jugada)
  if (jugada[0] == jugadaMaquina[0]) {
    console.log("acertaste")
    jugada = []
  } else {
    console.log("perdiste")
  }
})

document.querySelector(".azul").addEventListener("click",function() {
  jugada.push(2)
  console.log(jugada)
  if (jugada[0] == jugadaMaquina[0]) {
    console.log("acertaste")
    jugada = []
  } else {
    console.log("perdiste")
  }
})

document.querySelector(".amarillo").addEventListener("click",function() {
  jugada.push(3)
  console.log(jugada)
  if (jugada[0] == jugadaMaquina[0]) {
    console.log("acertaste")
    jugada = []
  } else {
    console.log("perdiste")
  }
}) */

  
























/* //JUGADA PERSONA 1

document.querySelector(".rojo").addEventListener("click",function() {
  jugada.push(0)
  console.log(jugada)
  if (jugada[0] == jugadaMaquina[0]) {
    console.log("acertaste")
    jugada = []
  } else {
    console.log("perdiste")
  }
})

document.querySelector(".verde").addEventListener("click",function() {
  jugada.push(1)
  console.log(jugada)
  if (jugada[0] == jugadaMaquina[0]) {
    console.log("acertaste")
    jugada = []
  } else {
    console.log("perdiste")
  }
})

document.querySelector(".azul").addEventListener("click",function() {
  jugada.push(2)
  console.log(jugada)
  if (jugada[0] == jugadaMaquina[0]) {
    console.log("acertaste")
    jugada = []
  } else {
    console.log("perdiste")
  }
})

document.querySelector(".amarillo").addEventListener("click",function() {
  jugada.push(3)
  console.log(jugada)
  if (jugada[0] == jugadaMaquina[0]) {
    console.log("acertaste")
    jugada = []
  } else {
    console.log("perdiste")
  }
})



/* new Promise(() => {
  document.querySelector(".rojo").addEventListener("click",seleccionado)
    
  function seleccionado () {
    consolidado.push(0)
  }

})
 */



