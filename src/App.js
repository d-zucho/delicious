import './App.css'
import Category from './components/Category'
import Pages from './pages/Pages'

// router
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Router>
        <Category />
        <Pages />
      </Router>
    </div>
  )
}

export default App
