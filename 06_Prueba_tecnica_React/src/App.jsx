import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { urlImage } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Recarga la petición</button>
      <section>
        {fact && <p>{fact}</p>}
        {urlImage && <img src={urlImage} alt={`Imagen extraída usando las tres primeras palabras de ${fact}}`} />}
      </section>
    </main>
  )
}
