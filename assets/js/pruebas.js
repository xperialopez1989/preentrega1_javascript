/* /* const valores = ["peras", "manzanas", "banana"]
const aleatorio = valores [Math.floor(Math.random() * valores.length)]

console.log (valores.length)
console.log (aleatorio) */

/* let consolidado = "";
let consolidadoMaquina = "";

while (consolidado == consolidadoMaquina) {
    const valores = ["DORADO", "AZUL", "BLANCO", "CELESTE"];
    let aleatorioEntero = valores[Math.floor(Math.random() * valores.length)];
    switch (aleatorioEntero) {
      case "AZUL":
        aleatorio = "A";
        break;
      case "BLANCO":
        aleatorio = "B";
        break;
      case "CELESTE":
        aleatorio = "C";
        break;
      case "DORADO":
        aleatorio = "D";
      default:
        text = "Imposible que suceda esto.";
    }
    consolidado = prompt("Simón dice: " + aleatorioEntero).toUpperCase();
    consolidadoMaquina = consolidadoMaquina + aleatorio;
  } */

  
  // PRUEBO VALOR Math.floor(Math.random() round y ceil.


/* let a = "";
let cero = 0;
let uno = 0;
let dos = 0;
let tres = 0;
let cuatro = 0;

 for (let i = 1; i <=1000; i++) {
    let a = (Math.ceil(Math.random()* 4))
    switch(a) {
        case 0: 
        cero +=1
        break;
        case 1: 
        uno +=1
        break;
        case 2: 
        dos +=1
        break;
        case 3: 
        tres +=1
        break;
        case 4: 
        cuatro +=1
        break;  
    }
 }
 
 console.log (cero)
 console.log (uno)
 console.log (dos)
 console.log (tres)
 console.log (cuatro) */




 /***************************************DESCRIPCIÓN DEL PROGRAMA************************************

-- Debe preguntar si la persona quiere jugar, si no quiere jugar el programa se despide.
-- En caso afirmativo, pregunta nombre y procedencia.
-- A continuación muestra instrucciones.
-- Se juega con A-azul B-blanco C-celeste D-dorado.
-- El programa debe mostrar una letra y la persona debe ingresarla con prompt, se muestra otra y la persona ingresa ambas con prompt, así sucesivamente.
-- Sistema de puntos: El programa debe contar la cantidad de caracteres que el jugador logró completar con éxito.
-- Faltaría finalizar mostrando el objeto jugador en algo así como un Ranking, el ranking podría ser un array? conteniendo algunos jugadores fijos de ejemplo y el jugadorActual.

****************************************************************************************************/

/* let inicio = confirm(
  "Bienvenido a 'La versión barata de Simón Dice!' querés jugar?"
);
class jugador {
  constructor(nombre, ciudad, puntaje) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.puntaje = puntaje;
  }
}
let consolidado = "";
let consolidadoMaquina = "";

const jugador1 = new jugador("Mariano", "Buenos Aires", 7);
const jugador2 = new jugador("Zeca", "Rio de Janeiro", 8);
const jugador3 = new jugador("Jhon", "Miami", 4);
const jugador4 = new jugador("Radamel", "Bogotá", 10);

if (inicio == true) {
  alert("Excelente vamos a jugar!");
  let nombreActual = prompt("Como te llamas?");
  let ciudadActual = prompt("Bienvenido " + nombreActual + ", de donde sos?");
  alert(
    nombreActual +
      " no se si en " +
      ciudadActual +
      " se juega Simón Dice pero es muy sencillo." +
      "\n*************************************************************" +
      "\nEn la pantalla aparecerá el nombre de un color: AZUL, BLANCO, \nCELESTE o DORADO. Debes ingresar la inicial del color y dar click \na ACEPTAR, ejemplo: ingresa D si la palabra que se mostró fue \nDORADO. Luego, una nueva ventana mostrará un nuevo color, \ndebes ingresar la letra del primer color y seguidamente la letra \ndel segundo color ejemplo DA si el segundo color que se \nmostró fue AZUL." +
      "\n*************************************************************" +
      "\nSUERTE!"
  );

  while (consolidado == consolidadoMaquina) {
    const valores = ["DORADO", "AZUL", "BLANCO", "CELESTE"];
    let aleatorioEntero = valores[Math.floor(Math.random() * valores.length)];
    switch (aleatorioEntero) {
      case "AZUL":
        aleatorio = "A";
        break;
      case "BLANCO":
        aleatorio = "B";
        break;
      case "CELESTE":
        aleatorio = "C";
        break;
      case "DORADO":
        aleatorio = "D";
      default:
        text = "Imposible que suceda esto.";
    }
    consolidado = prompt("Simón dice: " + aleatorioEntero).toUpperCase();
    consolidadoMaquina = consolidadoMaquina + aleatorio;
  }
  let puntajeActual = parseInt(consolidadoMaquina.length - 1);
  const jugadorActual = new jugador(nombreActual, ciudadActual, puntajeActual);

  alert("Perdiste, la secuencia era: " + consolidadoMaquina);
  alert(nombreActual + " tu puntaje es: " + puntajeActual);

  const ranking = [jugadorActual, jugador1, jugador2, jugador3, jugador4];
  ranking.sort((a, b) => {
    return b.puntaje - a.puntaje;
  });

  let puntuaciones = "";

  ranking.forEach((valor, index) => {
    puntuaciones +=
      parseInt(index) +
      1 +
      ")  " +
      valor.nombre +
      " de " +
      valor.ciudad +
      " " +
      valor.puntaje +
      " pts." +
      "\n";
  });

  alert("RANKING: \n" + puntuaciones);
} else {
  alert("Ok, vos te lo perdés.");
}
 */


/* 
DEVOLUCIÓN ENTREGA 2:

Hola Santiago, excelente trabajo👨‍💻



Se obtiene la calificación de óptimo debido a que se cumple con todo lo solicitado.

Tengo una sola corrección y es que estás declarando la clase constructora en el if, yo la declararía de manera global para que sea más legible y no esté todo el código junto y luego la utilizaría.



Ante cualquier duda quedo atento.

CORREGIDO

*/



/* function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}
resolveAfter2Seconds() */

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



/* class jugador {
  constructor(nombre, ciudad, puntaje) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.puntaje = puntaje;
  }
}

const jugador1 = new jugador("Mariano", "Buenos Aires", 7);
const jugador2 = new jugador("Zeca", "Rio de Janeiro", 8);
const jugador3 = new jugador("Jhon", "Miami", 4);
const jugador4 = new jugador("Radamel", "Bogotá", 10); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let ronda = 0;
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
quitarSeleccionado('.amarillo') */


///////////////////////////JUGADAS MAQUINA

/* function comparando() {  */
  // genero un aleatorio en jugadaMaquina
  /* let aleatorioEntero = Math.floor(Math.random() * valores.length);
  jugadaMaquina.push(aleatorioEntero);
  console.log(jugadaMaquina) */
  // muestro la jugadaMaquina
  //mostrarRonda()
  // la maquina espera a que el jugador copie la ronda
  /* return new Promise((resolve)=>{
    clickPersona()
      resolve(comparar())
    
  })
    }

  comparando()
  comparar() */

/* let generarRondas = (e) => {
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




document.addEventListener(`input`,generarRondas) */

////////////////////////////JUGADAS PERSONA

// necesito una funcion que registre los clicks del jugador

function clickPersona() {
  
  document.querySelector(".rojo").addEventListener("click",function() {
    esRojo = true;
    incorporarSeleccionado()
    console.log(jugada)
      return jugada
      
    
  }) 
  document.querySelector(".verde").addEventListener("click",function() {
    esVerde = true;
    incorporarSeleccionado()
    console.log(jugada)
    return jugada
      
    
  })
  document.querySelector(".azul").addEventListener("click",function() {
    esAzul = true;
    incorporarSeleccionado()
    console.log(jugada)
      return jugada
      
    
  })
  document.querySelector(".amarillo").addEventListener("click",function() {
    esAmarillo = true;
    incorporarSeleccionado()
    console.log(jugada)
      return jugada
      
    
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
incorporarSeleccionado()
console.log(jugada)

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
  

/*
 Que me falta?

 En cada jugada debe marcarse el indice de la maquina.
 Si supero el primer nivel, el juego debe adaptar la comparacion al segundo nivel y luego al tercer nivel.
 Aplicar JSON

 */

/* function clickPersona() {
  document.querySelector(".rojo").addEventListener("click",function() {
    reproducirAudio(audioRojo);
    document.querySelector('.rojo').classList.remove('seleccionado')
    setTimeout(function () {document.querySelector('.rojo').classList.add('seleccionado')},200)
    jugada.push('rojo');
    comparar(jugada,jugadaMaquina)
  }) 
  document.querySelector(".verde").addEventListener("click",function() {
    reproducirAudio(audioVerde);
    document.querySelector('.verde').classList.remove('seleccionado')
    setTimeout(function () {document.querySelector('.verde').classList.add('seleccionado')},200)
    jugada.push('verde');
    comparar(jugada,jugadaMaquina)
  })
  document.querySelector(".azul").addEventListener("click",function() {
    reproducirAudio(audioAzul);  
    document.querySelector('.azul').classList.remove('seleccionado')
    setTimeout(function () {document.querySelector('.azul').classList.add('seleccionado')},200)
    jugada.push('azul');
    comparar(jugada,jugadaMaquina)
  })
  document.querySelector(".amarillo").addEventListener("click",function() {
    reproducirAudio(audioAmarillo);  
    document.querySelector('.amarillo').classList.remove('seleccionado')
    setTimeout(function () {document.querySelector('.amarillo').classList.add('seleccionado')},200)
    jugada.push('amarillo');
    comparar(jugada,jugadaMaquina)
  })
  }
clickPersona(); */





























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


//////////////////////////////////////////////////////////////////////////////





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


//funcion para guardar nombre en local storage y escuchar el local storage al cargar sitio.

function guardarNombre() {
  localStorage.setItem("nombreJugador", nombreIngresado);
}

document.addEventListener("DOMContentLoaded", function () {
  nombreIngresado = localStorage.getItem("nombreJugador");
});




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
- OK Hacer objetos.
-    Desactivar clicks mientras se muestra jugadaMaquina NO PUDE.
-    Quitar infinity.
- OK Ver de aplicar spread operator.
-    Hacer responsive.

*/

