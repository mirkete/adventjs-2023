// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
// Crea una función que simule el movimiento del trineo durante un tiempo dado
//  y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

function cyberReindeer(road, time) {
  
    road = road.split("")
    let initialTime = time
    let result = []
    let position = 0
    
    let replacedChar = "."
  
    while(time > 0){
      
      if(time === initialTime){
        result.push(road.join(""))
        time--
        continue
      }
      if(time === initialTime - 5){
        road = road.join("").replaceAll("|", "*").split("")
      }
      let nextPosition = position+1
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
      time -= 1
    }
  
    return result
}