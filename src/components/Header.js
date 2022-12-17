import './Header/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <h3 className='logo'>Delicious</h3>
        </div>
        <nav>
          <Link className='home' to='/'>
            Home
          </Link>
          <Link to='/cuisine/italian'>Italian</Link>
          <a href='#search'>Search</a>
          <a href='#'>About</a>
          <select name='nav-category' id='nav-category'>
            Cuisines
          </select>
        </nav>
      </div>
    </header>
  )
}

export default Header
