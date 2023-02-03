import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNO, WINNER_COMBOS } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { checkWinner, checkEndGame } from './logic/board'
import { saveLocalStorage, resetLocalStorage } from './logic/storage/app'

function App() {
  //Estados
  const [ board, setBoard ] = useState( () => {
    const boardFromStorage = window.localStorage.getItem( 'board' )
    return boardFromStorage ? JSON.parse( boardFromStorage ) : Array( 9 ).fill( null )
  } )
  const [ turn, setTurn ] = useState( () => {
    const turnFromStorage = window.localStorage.getItem( 'turn' )
    return turnFromStorage ? turnFromStorage : TURNO.X 
  } )
  //Null es que no hay ganador, false es que que hay un empate
  const [ winner, setWinner ] = useState( null )
  
  //Reseteamos el juego 
  const resetGame = () => {
    setBoard( Array( 9 ).fill( null ) )
    setTurn( TURNO.X )
    setWinner( null )
    //Reseteamos el juego
    resetLocalStorage( 'board', 'turn' )
  }

  const updateBoard = ( index ) => {
    //No actualices la posición si hay algo o hay un ganador
    if( board[ index ] || winner ) return
    //Actualizar tablero
    const newBoard = [ ...board ];
    newBoard[ index ] = turn
    setBoard( newBoard ) // Asíncrona
    //Cambiar el turno
    const newTurn = turn === TURNO.X ? TURNO.O : TURNO.X
    setTurn( newTurn )
    //Llamamos a la función encargada de guardar en Local Storage
    saveLocalStorage( newBoard, newTurn )

    //revisamos se hay un ganador
    const newWinner = checkWinner( newBoard )
    if( newWinner ) { 
      confetti()
      setWinner( newWinner )
      //alert( `El ganador es ${ turn }`)
    } else if ( checkEndGame( newBoard ) ) {
      setWinner( false )
    } 
  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={ resetGame }>Volver a comenzar</button>
      <section className='game'>
        {
          board.map( ( cell, index ) =>{
            return (
              <Square
                index={ index }
                updateBoard = { updateBoard }
              >
              { cell }
              </Square>
            )
          } )
        }
      </section>
      <section className="turn">
        <Square isSelected={ turn === TURNO.X }>{ TURNO.X }</Square>
        <Square isSelected={ turn === TURNO.O }>{ TURNO.O }</Square>
      </section>
      <WinnerModal
        winner={ winner }
        resetGame={ resetGame }
      ></WinnerModal>
    </main>    
  )
}

export default App
