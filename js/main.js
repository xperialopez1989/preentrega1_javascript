let inicio = confirm ("Bienvenido a Simón Dice Low Cost! Querés jugar?")
if (inicio == true) {
    alert ("Excelente vamos a jugar!")
    alert ("En la pantalla aparecerá el nombre de un color AZUL, BLANCO, CELESTE o DORADO debes ingresar la inicial del color y dar click a ACEPTAR, ejemplo: ingresa D si la palabra que se mostró fue DORADO. Luego, una nueva ventana mostrará un nuevo color, debes ingresar la letra del primer color y seguidamente la letra del segundo color ejemplo DA si el segundo color que se mostró fue AZUL. SUERTE!")
    let consolidado = "";
    let consolidadoMaquina = "";
    
    while (consolidado == consolidadoMaquina) {
    const valores = ["DORADO", "AZUL","BLANCO","CELESTE"]
    let aleatorioEntero = valores [Math.floor(Math.random () * valores.length)];
    switch (aleatorioEntero) {
        case "AZUL":
            aleatorio = "A"
            break
        case "BLANCO":
            aleatorio = "B"
            break
        case "CELESTE":
            aleatorio = "C"
            break
        case "DORADO":
            aleatorio = "D"
        default:
            text = "Imposible que suceda esto."
    }
    consolidado = prompt ("Simón dice: " + aleatorioEntero).toUpperCase();
    consolidadoMaquina = consolidadoMaquina + aleatorio;
}
alert ("Perdiste, la secuencia era: " + consolidadoMaquina)
alert ("Tu puntaje es: " + parseInt(consolidadoMaquina.length - 1))
}else {
    alert ("Ok, vos te lo perdés")
}






/* 
Tengo que preguntar si quiere jugar, si no quiere jugar me despido.
Si quiere jugar explico las instrucciones.
Juego con A-azul B-blanco C-celeste D-dorado.
Tengo que mostrar una letra y la persona tiene que ingresarla con prompt, le muestro otra y la persona ingresa 
ambas con prompt, muestro otra y la persona ingresa las tres letras con prompt. Así hasta que olvide la secuencia y pierda.
El sistema de puntos cuenta la cantidad de caracteres que el jugador logró completar con éxito.
Tengo que identificar algo repetitivo y hacerlo con una función, tengo que incluir condicional y algún ciclo.
*/

