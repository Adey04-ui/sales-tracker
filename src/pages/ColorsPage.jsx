import React from 'react'
import ThemeColors from '../components/ThemeColors'
import TailwindColor from '../components/TailwindColor'
import Footer from '../components/Footer'
import Header from '../components/Header'

function ColorsPage({show, theme}) {
  return (
    <div className={`full-container ${!show && 'full' }`}>
      <Header theme={theme} />
      <ThemeColors theme={theme} />
      <TailwindColor theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

export default ColorsPage