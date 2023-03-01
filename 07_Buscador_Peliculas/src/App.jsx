import './App.css'
import { useEffect, useRef, useState, useCallback } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

import debounce from 'just-debounce-it'

function useSearch() {
  const [ search, updateSearch ] = useState('')
  const [ error, setError ] = useState(null)
  const isFirstInput = useRef( true )
  
  useEffect(() => {
      if(isFirstInput.current) {
        isFirstInput.current = search === ""
        return
      }
      if( search === '' ) {
        setError('El cuadro de búsqueda no puede estar vacío')
        return //Para que no se siga ejecturando
      } 
      if (search.match(/^\d+$/)) {
        setError('No se puede buscar una película con un número')
        return
      }
  
      if (search.length < 3) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
      setError(null)
      
    }, [search])
  return { search, updateSearch, error }
}  

function App() {
  const [ sort, setSort ] = useState(false)
  const { search, updateSearch, error } = useSearch()
  
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    } ,300)
    ,[getMovies]
  )   

  //const inputRef = useRef()
  const handelSubmit = ( event ) => {
    event.preventDefault()
    //console.log(search)
    getMovies({search})
  }
  const handleChange = ( event ) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)       
  }
  const handleCheck = () => {
    setSort(!sort)
  }
 
  return (
    <div className='page'>
      <header>
        <form onSubmit={ handelSubmit }>
          <input 
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'}}
            type="text" name="film" value={search} onChange={handleChange} placeholder="Spiderman, Memento, ..." />
          <input type="checkbox" name="" id="" onChange={handleCheck} checked={sort}/>
          <button type="submit">Search</button>
        </form>
        <hr />
      </header>
      <main>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <h2>Listado de peliculas</h2>
        { loading 
          ? <div className='spinner'></div> 
          : <Movies movies={movies}/> 
        }        
      </main>
    </div>
  )
}
export default App
