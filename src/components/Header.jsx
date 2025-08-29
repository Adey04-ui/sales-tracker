import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, ChevronRight } from 'react-feather';

function Header() {
  const location = useLocation()
  const currentPath = location.pathname;
  const isHome = location.pathname === '/'
  if (isHome) {
    return (
      <div className="header">
            <p className='header1'>Default</p>
            <p className='links'><Link to='/' className='headerlinks2'> Home</Link> <ChevronRight size={14} /><Link className='headerlinks2'> Dashboard</Link> <ChevronRight className='rightarrow' size={14} /> Default</p>
          </div>
    )
  }
  if(currentPath === '/icon-feather') {
    return (
      <div className="header">
            <p className='header1'>Feather icon</p>
            <p className='links'><Link className='headerlinks2' to='/'> Home</Link> <ChevronRight size={14} /><Link className='headerlinks2'> Icons</Link> <ChevronRight className='rightarrow' size={14} /> Feather Icon</p> 
      </div>
    )
  }
  if (currentPath === '/color') {
    return (
      <div className="header">
              <p className='header1'>Color</p>
              <p className='links'><Link to='/' className='headerlinks2'> Home</Link> <ChevronRight size={14} /><Link className='headerlinks2'> Basic UI</Link> <ChevronRight className='rightarrow' size={14} /> Color</p> 

      </div>
    )
  }
  if (currentPath === '/typography') {
    return (
      <div className="header">
              <p className='header1'>Typography</p>
              <p className='links'><Link to='/' className='headerlinks2'> Home</Link> <ChevronRight size={14} /><Link className='headerlinks2'> Basic UI</Link> <ChevronRight className='rightarrow' size={14} /> Typography</p> 

      </div>
    )
  }
  if (currentPath === '/sample-page') {
    return (
      <div className="header">
              <p className='header1'>Sample Page</p>
              <p className='links'><Link to='/' className='headerlinks2'> Home</Link> <ChevronRight size={14} /><Link className='headerlinks2'> Other</Link> <ChevronRight className='rightarrow' size={14} /> Sample Page</p> 

      </div>
    )
  }
}

export default Header