import Home from './Home'
import Cuisine from './Cuisine'

// router
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
      </Routes>
    </div>
  )
}

export default Pages
