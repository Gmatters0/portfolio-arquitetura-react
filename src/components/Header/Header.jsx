import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Button from '../Button/Button'

// ASSETS
import logoDNC from '../../assets/logoDNC.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(0)
  return (
    <header>
      <div className="container">
        <div className="d-flex al-center jc-space-between">
          <Link to="/"><img src={logoDNC} /></Link>
          <div className="mobile-menu">
            <Button onClick={() => setIsOpen(!isOpen)} buttonStyle="default">Menu</Button>
          </div>
          <nav className={`${isOpen ? 'open' : ''}`}>
            <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={() => setIsOpen(!isOpen)}>X</Button>
            <ul className="d-flex">
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/projects"><li>Projects</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header