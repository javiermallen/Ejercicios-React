import { WINNER_COMBOS } from "../constants"

//Comparamos posiciones con el vector para saber si hay un ganador
export const checkWinner = ( boardToCheck ) => {
for (const combo of WINNER_COMBOS ) {
    const [ a, b, c ] = combo
    
    if ( boardToCheck[ a ] && boardToCheck[ a ] === boardToCheck[ b ] && boardToCheck[ a ] === boardToCheck[ c ] ) {
    return boardToCheck[ a ]  
    }   
}
//Si no hay ganador
return null    
}

//Comprobamos que se haya rellenado el tablero
export const checkEndGame = ( boardToCheck ) => {
    return boardToCheck.every( ( cell ) => cell !== null )
}