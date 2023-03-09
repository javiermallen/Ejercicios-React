import { Link } from "../Link"

const i18n = {
  es: {
    title: 'Sobre mí',
    description: 'Estamos creando una versión de React router 🏆',
    link: 'Ir al home'
  },
  en: {
    title: 'About me',
    description: 'We are creating a React Router version 🏆',
    link: 'Go to home'
  }
}
const useOfI18n = ( lang ) => {
  return i18n[lang]  
}

export default function About ({routeParams}) {
  //La coalescencia alcista funciona exactamente igual que el operador lógico OR, 
  //excepto que obtendrá el valor del lado derecho cuando el valor del lado izquierdo sea undefined o null.
  const i18n = useOfI18n( routeParams.lang ?? 'es')
  return(
      <>
        <h1>{i18n.title}</h1>
        <p>{i18n.description}</p>
        <img src="https://www.formacionytecnologia.com/email/2019/estatal/app/vistas/img/team/mallen.jpg" alt="Javier Mallén"  width="200px"/>
        <hr />
        <Link to={'/'}>{i18n.link}</Link>        
      </>
    )
}