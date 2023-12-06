// ¡Encuentra el primer número de identificación que se ha repetido, 
// donde la segunda ocurrencia tenga el índice más pequeño!
// En otras palabras, si hay más de un número repetido, 
// debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. 
// Si no hay números repetidos, devuelve -1.

function findFirstRepeated(gifts){
    const unique = new Set()

    for(let i = 0; i < gifts.length; i++){
        if(unique.has(gifts[i])){
            return gifts[i]
        } else{
            unique.add(gifts[i])
        }
    }
    return -1
}