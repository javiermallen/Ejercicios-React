  
export function saveLocalStorage ( newBoard, newTurn ) {
    //Guardamos la partida
    window.localStorage.setItem( 'board', JSON.stringify( newBoard ) )
    window.localStorage.setItem( 'turn', newTurn )
}

export function resetLocalStorage ( board, turn) {
    window.localStorage.removeItem( board )
    window.localStorage.removeItem( turn )
}