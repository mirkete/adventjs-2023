// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
// Crea una función que simule el movimiento del trineo durante un tiempo dado
//  y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

function cyberReindeer(road, time) {
  
  let result = [road]
  road = road.split("")
  let initialTime = time
  let position = 0
  let replacedChar = "."

  while(time > 1){
    
    let nextPosition = position+1

    if(time === initialTime - 4){
      road = road.join("").replaceAll("|", "*").split("")
    }
    

    if(road[nextPosition] === "|"){
      result.push(road.join(""))
      time--
      continue
    }

    let savedChar = road[nextPosition]
    road[nextPosition] = "S"
    road[position] = replacedChar
    replacedChar = savedChar 
    result.push(road.join(""))

    position++
    time--
  }

  return result
}