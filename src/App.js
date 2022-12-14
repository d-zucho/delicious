import './App.css'
import Category from './components/Category'
import Pages from './pages/Pages'

// router
import { BrowserRouter as Router } from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
    <div className='app'>
      <Router>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  )
}

export default App
