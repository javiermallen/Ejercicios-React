import { useMemo, useRef, useState, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [ movies, setMovies ] = useState([])
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState( false )
  const prevSearch = useRef( search )
  
  const getMovies = useCallback(async ({search}) => {
      if ( search === prevSearch.current ) return
      try {
        setLoading( true )
        setError( null )
        prevSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies( newMovies )
      } catch (error) {
        setError(error.message)
      } finally {
        //Esto se ejecuta tanto en el try como en el catch
        setLoading( false )
      }  
    },
    [],
  )
  
  //const sortMovies = sort
  //  ?  [...movies].sort( (a,b) => a.title.localeCompare(b.title) )
  //  :  movies

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort( (a,b) => a.title.localeCompare(b.title) )
      : movies
  }, [sort, movies])     

  return { movies: sortMovies, getMovies, loading }
}