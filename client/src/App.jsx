import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/1',
      element: <LocationEvents index={1} />
    },
    {
      path: '/2',
      element: <LocationEvents index={2} />
    },
    {
      path: '/3',
      element: <LocationEvents index={3} />
    },
    {
      path: '/4',
      element: <LocationEvents index={4} />
    },
  ])

  return (
    <div className='app container'>

      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App