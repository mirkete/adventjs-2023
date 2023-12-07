/*
Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder
Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.
*/

function maxDistance(movements) {
    let chars = {">": 0, "<": 0, "*": 0}
    movements.split("").forEach((char) => {
      chars[char] += 1
    })
    let maxAndMin = (chars[">"] > chars["<"]) 
      ? [chars[">"], chars["<"]]
      : [chars["<"], chars[">"]]
    let distance = maxAndMin[0] + chars["*"] - maxAndMin[1]
    
    return distance
}