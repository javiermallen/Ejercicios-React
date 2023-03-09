import { Link } from "../Link"

export default function Page404 () {
    return(
      <>
        <h1>About me</h1>
       
        <img src="https://dsim.in/blog/wp-content/uploads/2017/08/404_page_dssim-837x560.jpg" alt="Error 404"  width="200px"/> 
        <p>Me parece que esto no es lo que buscas 🔍</p>
        <hr />
        <Link to={'/'}>Ir al Home</Link>        
      </>
    )
}