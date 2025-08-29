import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
function Footer2({theme}) {
  return (
    <footer className={`${theme === 'dark' && 'dark'}`}>
      <div className="footer1">
        <span className="footer1-1">
          <Link to="https://codedthemes.com" className={`link ${theme === 'dark' && 'dark'}`}>CodedThemes</Link> ,
          Built with <FaHeart size={12} /> for a smoother web presence
        </span>
      </div>
      <div className="footer2">
        <span className="footer2-1">
          Distributed by Themewagon
        </span>
      </div>
    </footer>
  )
}

export default Footer2