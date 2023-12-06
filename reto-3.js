// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified,
// que puede incluir un paso extra o faltar un paso.
// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. 
// Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

function findNaughtyStep(original, modified) {

    for (let i = 0; i <= original.length; i++){
      let left = original[i]
      let right = modified[i]
  
      if(left !== right){
        let charAdded = original.length <= modified.length
        
        return charAdded ? right : left 
      }
    }
    return ''
}