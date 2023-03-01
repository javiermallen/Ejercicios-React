const listOfMovies = (movies) => {
   return (
        <ul className="movies">
            {movies.map( movie => {
                return (       
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title} - Año: {movie.date}</h3>
                        <img src={movie.src} alt={movie.date} />
                    </li>              
                )}
            )
            }
        </ul>    
    )
}

const noMovies = () => {
    return <p>La búsqueda no ha obtenido ningún resultado</p>
}

export function Movies ({movies}) {
    const hasMovies = movies?.length > 0
    return hasMovies ? listOfMovies(movies) : noMovies()
}