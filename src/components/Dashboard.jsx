import React from 'react'
import Sales from './Sales';
import Socials from './Socials';
import Header from './Header';
import Other from './Other';
import Footer from './Footer';

function Dashboard({show, theme}) {
  return (
    <>
      <div className={`full-container ${!show && 'full' }`}>
        <Header theme={theme} />
        <Sales theme={theme} />
        <Socials theme={theme} />
        <Other theme={theme} />
        <Footer theme={theme} />
      </div>
    </>
  )
}

export default Dashboard