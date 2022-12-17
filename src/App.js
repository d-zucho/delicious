import './App.css'
import Category from './components/Category'
import Pages from './pages/Pages'

// router
import { BrowserRouter as Router } from 'react-router-dom'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <main>
          <Search />
          <Category />
          <Pages />
        </main>
      </Router>
    </div>
  )
}

export default App
