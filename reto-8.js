/*
Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. 
Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

Los elfos tienen un sistema especial para organizar los regalos:

Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. 
Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
Cada 5 cajas se apilan en un palé, representado por [x]. 
Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. 
Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. 
Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es: 
Escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.
*/

function organizeGifts(gifts) {
    let splitter = /[0-9]+|[a-z]+/gi
    let matches = gifts.match(splitter)
    let letters = ""
  
    for(let i = 0; i < matches.length; i += 2){
      let quantity = matches[i]
      let letter = matches[i+1]
      
      let totalCajasCount = (quantity - quantity % 10) / 10  
      let palesCount = (totalCajasCount - totalCajasCount % 5) / 5
      let cajasCount = totalCajasCount - palesCount * 5
      let bolsasCount = quantity - cajasCount * 10 - palesCount * 50
      
      let cajas = `{${letter}}`.repeat(cajasCount)
      let pales = `[${letter}]`.repeat(palesCount)
      let bolsas = bolsasCount ? `(${letter.repeat(bolsasCount)})` : ""
      
      letters += pales + cajas + bolsas
    }
    
    return letters
}