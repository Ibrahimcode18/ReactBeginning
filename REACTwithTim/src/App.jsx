import Home from './pages/Home'
import './css/App.css'
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvidder } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvidder>
      <NavBar />
      <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
      </main>
    </MovieProvidder>
  )
}

export default App
