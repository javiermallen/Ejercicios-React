import { lazy, Suspense } from 'react'

import { Router } from './Router'
import { Route } from './Route'

const lazyHome= lazy( () => import('./pages/Home'))
const lazyAbout = lazy( () => import('./pages/About'))
const lazyPage404 = lazy( () => import('./pages/404'))
const lazySearchPage = lazy( () => import('./pages/SearchPage'))

const routesApp = [
  {
    path: '/search/:query',
    Component: lazySearchPage
  },
  {
    path: '/:lang/about',
    Component: lazyAbout
  }
]

function App() {  

  return (
    <main>
      <Suspense fallback={<p>Cargando...</p>}>
        <Router routesApp={routesApp} DefaultComponent={lazyPage404}>
          <Route path={'/'} Component={lazyHome} />
          <Route path={'/about'} Component={lazyAbout} />
        </Router>      
      </Suspense>
    </main>
  )
}

export default App
