import { Square } from "./Square"

export const WinnerModal = ({ winner, resetGame }) => {
    if ( winner === null ) return null
    const winnerText = winner === false ? 'Empate' : `El ganador es:`

    return (
        <section className="winner">
            <div className="text">
                <h2> { winnerText }</h2>
                <header className="win">
                    { winner && <Square>{ winner }</Square>}
                </header>
                <footer>
                    <button onClick={ resetGame }>Volver a comenzar</button>                
                </footer>            
            </div>
        </section>  
    )
}
    
             