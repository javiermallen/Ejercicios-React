import { Link } from "../Link"

export default function Home () {
    return(
      <>
        <h1>Bienvenidos a la home</h1>
        <Link to={'/about'}>Ir al About</Link>
      </>
    )
}