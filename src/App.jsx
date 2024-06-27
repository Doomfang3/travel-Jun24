import { useState } from 'react'
import logo from './assets/logo.png'
import TravelList from './components/TravelList'
import FavList from './components/FavList'

function App() {
  const [favorites, setFavorites] = useState([])

  const addToFavs = id => {
    setFavorites([...favorites, id])
  }

  const removeFromFavs = id => {
    setFavorites(favorites.filter(currentFavId => currentFavId !== id))
  }

  return (
    <>
      <div>
        <img src={logo} className='logo' alt='App logo' />
      </div>
      <h1 className='text-iron'>Iron Travels</h1>
      <h3 className='text-iron'>Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList favorites={favorites} addToFavs={addToFavs} />
      <FavList favorites={favorites} removeFromFavs={removeFromFavs} />
    </>
  )
}

export default App
