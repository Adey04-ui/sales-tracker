import React from 'react'
import Headings from '../components/Headings'
import InlineAndContextual from '../components/InlineAndContextual'
import Lists from '../components/Lists'
import Header from '../components/Header'

function Typography({show, theme}) {
  
  return (
    <div className={`full-container ${!show && 'full' }`}>
      <Header theme={theme} />
      <Headings theme={theme} />
      <InlineAndContextual theme={theme} />
      <Lists theme={theme} />
    </div>
  )
}

export default Typography