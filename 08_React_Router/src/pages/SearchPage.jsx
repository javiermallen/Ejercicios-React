import { Link } from "../Link"

export default function SearchPage ({routeParams}) {
    return(
      <>
        <h1>Buscando {routeParams.query}</h1>
        <Link to={'/'}>Ir al Home</Link>
        {/* Aquí con el Use Effect podríamos hacer una petición con el parámetro, etc... */}
      </>
    )
}