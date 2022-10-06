/***************************************DESCRIPCIÓN DEL PROGRAMA************************************

-- Debe preguntar si la persona quiere jugar, si no quiere jugar el programa se despide.
-- En caso afirmativo, pregunta nombre y procedencia.
-- A continuación muestra instrucciones.
-- Se juega con A-azul B-blanco C-celeste D-dorado.
-- El programa debe mostrar una letra y la persona debe ingresarla con prompt, se muestra otra y la persona ingresa ambas con prompt, así sucesivamente.
-- Sistema de puntos: El programa debe contar la cantidad de caracteres que el jugador logró completar con éxito.
-- Faltaría finalizar mostrando el objeto jugador en algo así como un Ranking, el ranking podría ser un array? conteniendo algunos jugadores fijos de ejemplo y el jugadorActual.

****************************************************************************************************/

let inicio = confirm(
  "Bienvenido a 'La versión barata de Simón Dice!' querés jugar?"
);
if (inicio == true) {
  alert("Excelente vamos a jugar!");
  class jugador {
    constructor(nombre, ciudad, puntaje) {
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.puntaje = puntaje;
    }
  }
  let consolidado = "";
  let consolidadoMaquina = "";
  let nombreActual = prompt("Como te llamas?");
  let ciudadActual = prompt("Bienvenido " + nombreActual + ", de donde sos?");
  const jugador1 = new jugador("Mariano", "Buenos Aires", 7);
  const jugador2 = new jugador("Zeca", "Rio de Janeiro", 8);
  const jugador3 = new jugador("Jhon", "Miami", 4);
  const jugador4 = new jugador("Radamel", "Bogotá", 10);

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
