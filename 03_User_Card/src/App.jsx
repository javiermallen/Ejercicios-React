import './App.css'
import { UserCard } from './UserCard.jsx'

const usuarios = [
  {
    imagen: "https://placeimg.com/640/480/people",
    nombre: "Javier Mallén",
    trabajo: "Desarrollador Junior",
    pais: "España",
    skills: [ "HTML", "CSS", "SASS", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", "MySQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"],
    fechaInscripcion: "30 de Agosto de 2020"
  }
]
export function App() {
  
  return( 
    usuarios.map( usuario => {
      const{ imagen, nombre, trabajo, pais, skills, fechaInscripcion } = usuario
      return (
        <UserCard 
          imagen={ imagen } 
          nombre={ nombre }
          trabajo={ trabajo }
          pais={ pais }
          skills={ skills }
          fechaInscripcion={ fechaInscripcion }          
        />
      ) 
    })
  )
  
}
