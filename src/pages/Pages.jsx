import Home from './Home'
import Cusine from './Cuisine'

// router
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine' element={<Cusine />} />
      </Routes>
    </div>
  )
}

export default Pages
