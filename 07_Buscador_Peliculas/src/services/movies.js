const API_KEY = '4287ad07'
const END_POINT =`https://www.omdbapi.com/?apikey=${API_KEY}&s=`

export async function searchMovies ({ search }) {
    if( search === '' ) return null
    try {
        const response = await fetch(`${END_POINT}${search}`)
        const json = await response.json()
        const movies = await json.Search
        return movies?.map( movie => {
            return( {
              id: movie.imdbID,
              date: movie.Year,
              title: movie.Title,
              src: movie.Poster
            })
        })
    } catch (error) {
        throw new Error('Error de conexión')
    }    
}