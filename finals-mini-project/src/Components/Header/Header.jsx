import {useState} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa6"
import './Header.css'

export const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    
    const location = useLocation()
    const activeColor = 
    location.pathname === '/' 
    ? '84, 178, 255' : location.pathname.startsWith('/Products') 
    ? '235, 81, 26' : location.pathname === '/Feedback' 
    ? '77, 223, 77' : location.pathname === '/Mission-Vision' 
    ? '244,194,194' : location.pathname.startsWith('/CompanyProfile')
    ? '255, 255, 0' : location.pathname.startsWith('/Devs')
    ?'255, 0, 255': '228,0,15';
    document.documentElement.style.setProperty('--active-color', activeColor);
    const secondaryColor = 
    location.pathname === '/' 
    ? '84, 178, 255' : location.pathname.startsWith('/Products') 
    ? '235, 81, 26' : location.pathname === '/Feedback' 
    ? '77, 223, 77' : location.pathname === '/Mission-Vision' 
    ? '244,194,194' : location.pathname.startsWith('/CompanyProfile')
    ? '255, 55, 0' : location.pathname.startsWith('/Devs')
    ?'0, 255, 132': '228,0,15';
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    return (
      <nav style={{borderBottomColor: `rgb(${activeColor})`}}>
          <Link to="/" className='title' style={{ color: `rgb(${activeColor})`, transition: 'color 0.5s ease' }}onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>KeyStaxx</Link>
          <div className={menuOpen?'menu open':'menu'}  onClick={()=>{
              setMenuOpen(!menuOpen),setDropdownOpen(false)
          }}>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <ul className={menuOpen?'open':''}>
              <li>
                  <NavLink to="/" className='color1' onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>Home</NavLink>
              </li>
              <li>
                  <NavLink to="/Products" className='color1' onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>Products</NavLink>
              </li>
              <li className='dropdown' >
                <div className={`mother ${dropdownOpen ? 'open' : ''}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}>
                    About&nbsp;
                    <FaChevronDown className='dropdown-arrow' />
                </div>
                  <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`} >
                    <li><NavLink to='/Mission-Vision' className='dropdown-item color1' onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>Mission & Vision</NavLink></li>
                    <li><NavLink to='/CompanyProfile' className='dropdown-item color1' onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>Company Profile</NavLink></li>
                    <li><NavLink to='/Devs' className='dropdown-item color1' onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>Devs</NavLink></li>
                    <li><NavLink to='/Feedback' className='dropdown-item color1' onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>Feed Back</NavLink></li>
                  </ul>
              </li>
              <li>
                  <NavLink to="/Contact" className='color1' onClick={() => {setDropdownOpen(false), setMenuOpen(false)}}>Contact</NavLink>
              </li>
          </ul>
      </nav>
    )
}
