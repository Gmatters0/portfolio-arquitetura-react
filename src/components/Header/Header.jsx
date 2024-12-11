import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Button from '../Button/Button'

// ASSETS
import './Header.css'
import logoDNC from '../../assets/logoDNC.svg'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

function Header() {
  const [isOpen, setIsOpen] = useState(0)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const appContext = useContext(AppContext)

  return (
    <header>
      <div className="container">
        <div className="d-flex al-center jc-space-between">
          <Link to="/"><img src={logoDNC} /></Link>
          <div className="mobile-menu">
            <Button onClick={toggleMenu} buttonStyle="default">Menu</Button>
          </div>
          <nav className={`${isOpen ? 'open' : ''}`}>
            <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>X</Button>
            <ul className="d-flex">
              <Link to="/"><li>{appContext.languages[appContext.language].menu.home}</li></Link>
              <Link to="/about"><li>{appContext.languages[appContext.language].menu.about}</li></Link>
              <Link to="/projects"><li>{appContext.languages[appContext.language].menu.projects}</li></Link>
              <Link to="/contact"><li>{appContext.languages[appContext.language].menu.contact}</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header