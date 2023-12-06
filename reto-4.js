// Santa necesita que estos mensajes estén correctamente formateados. 
// Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, 
// eliminando los paréntesis en el mensaje final.
// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

function decode(message) {
    const stack = [];
    let result = "";
  
    for (let char of message) {
      if (char === "(") {
        stack.push(result);
        result = "";
      } else if (char === ")") {
        result = stack.pop() + result.split("").reverse().join("");
      } else {
        result += char;
      }
    }
  
    return result;
}