// Los regalos son cadenas de texto y los materiales son caracteres. 
// Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, 
// devuelva una lista de los regalos que se pueden fabricar.
// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
    let materialsSet = new Set()
    materials.split("").forEach((material) => materialsSet.add(material))
  
    return gifts.filter((gift) => {
      return gift.split("").every((letter) => materialsSet.has(letter))
    })
}