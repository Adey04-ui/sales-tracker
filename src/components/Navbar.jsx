import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../favicon.svg'
import {Edit, Feather, Home, Type, Lock, UserPlus, Menu, Layout, AlignRight, ChevronRight} from 'react-feather'

function Navbar({show, theme}) {
   const location = useLocation()
   const navigate = useNavigate()

  const currentPath = location.pathname;
  const isHome = location.pathname === '/'

  useEffect(() => {
    console.log('Current route:', currentPath)

  }, [currentPath])

  const [expand, setExpand] = useState(false)

  const toggle = () => {
    setExpand((prev) => !prev)
  }
  return (
    <nav className={`${show ? 'active' : 'notactive'} ${theme === 'dark' && 'dark'}`}>
      <div className="navlogo">
        <img src="../favicon.svg" alt="" className='logoImage' />
        <span className='h1'>Datta Able </span>
      </div>
      <div className={`navlinks ${theme === 'dark' && 'dark'}`}>
      <div className='group-comp'>
      <h1>navigation</h1>
      <ul>
        <li className={`${isHome && 'active'}`} onClick={() => navigate ('/')}><Home size={18} className='navIcons' /> Dashboard</li>
      </ul>
      </div>
      <div className='group-comp'>
      <h1>ui components</h1>
      <ul>
        <li className={`${currentPath.startsWith('/color') && 'active'}`} onClick={() => navigate ('/color')}><Edit size={18} className='navIcons' /> Color</li>
        <li className={`${currentPath.startsWith('/typography') && 'active'}`} onClick={() => navigate ('/typography')}><Type size={18} className='navIcons' /> Typography</li>
        <li className={`${currentPath.startsWith('/icon-feather') && 'active'}`} onClick={() => navigate ('/icon-feather')}><Feather size={18} className='navIcons' /> Icons</li>
      </ul>
      </div>
      <div className='group-comp'>
      <h1>pages</h1>
      <ul>
        <li className='' onClick={() => window.open('/login', '_blank')}><Lock size={18} className='navIcons' /> Login</li>
        <li className='' onClick={() => window.open('/register', '_blank')}><UserPlus size={18} className='navIcons' /> Register</li>
      </ul>
      </div>
      <div className='group-comp'>
      <h1>other</h1>
      <ul>
        <li className={`${expand ? 'active' : ''}`} onClick={toggle}><AlignRight size={18} className='navIcons' /> Menu Level <ChevronRight size={16} className='menuarrow' /></li>
        <div className={`expandnav ${expand ? 'active' : ''}`}>
          <ul>
          <li className='active'> Level 2.1</li>
          <li className='active'> Level 2.2</li>
          <li className='active'> Level 2.3</li>
          </ul>
        </div>
        <li className={`${currentPath.startsWith('/sample-page') && 'active'}`} onClick={() => navigate ('/sample-page')}><Layout size={18} className='navIcons' /> Sample Page</li>
      </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar