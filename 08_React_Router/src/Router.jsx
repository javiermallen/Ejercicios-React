import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'

import { EVENTS } from './const'

export function Router ({ children, routesApp = [], DefaultComponent= () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
      const changeURL = () => {
        setCurrentPath( window.location.pathname )
      }
      
      //Llamamos al evento personalizado
      window.addEventListener( EVENTS.PUSHSTATE, changeURL)
      //Escuchamos al botón de ir atras
      window.addEventListener( EVENTS.POPSTATE, changeURL)
    
      return () => {
        window.removeEventListener( EVENTS.PUSHSTATE, changeURL )
        window.removeEventListener( EVENTS.POPSTATE, changeURL )
      }
    }, [])

    //Añadimos rutas que vienen de los componentes, iteramos a través del Children y desestructuramos props y el tipo
    const routesFromComponent = Children.map( children, ({props, type}) => {
      const { name } = type
      //Si aparece la palabra Route es que hay rutas
      const isRoute = name === 'Route'
      return isRoute ? props : null
    })

    //A las rutas que recibimos al llamar al componente le concatenamos las obtenidas por cada uno de sus hijos
    routesApp = routesApp.concat( routesFromComponent )
    

    //Creamos una variable para guardar los parámetros
    let routeParams = {}
    const Page = routesApp.find(({ path } ) => {
        
        if (path === currentPath) return true

        // hemos usado path-to-regexp
        // para poder detectar rutas dinámicas como por ejemplo
        // /search/:query <- :query es una ruta dinámica
        const matchUrl = match( path, { decode: decodeURIComponent });
        //Esto devolvera un objeto con toda la ruta
        //Ahora lo que hacemos es pasarle al objeto la ruta que tenemos en el path, si cumple las condiciones
        //devolverá un objeto con la propiedad params que será donde viene el query y si no devolvera un falso
        const matched = matchUrl( currentPath )

        if (!matched) return false
        // guardar los parámetros de la url que eran dinámicos
        // y que hemos extraído con path-to-regexp
        // por ejemplo, si la ruta es /search/:query
        // y la url es /search/javascript
        // matched.params.query === 'javascript'
        routeParams = matched.params

        return true     
  
    })?.Component
    
    
    return Page 
        ? <Page routeParams={routeParams}/> 
        : <DefaultComponent routeParams={routeParams} />
  }