import React from 'react'
import Footer from './Footer'
import Footer2 from './Footer2'
import Header from './Header'

function Samplepage({theme, show}) {
  return (
    <>
      <div className={`full-container ${!show && 'full' }`}>
        <Header theme={theme} />
        <div className={`hellocard ${theme === 'dark' && 'dark'}`}>
          <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
            <span>hello card</span>
          </div>
          <div className="hellocardcontent">
          </div>
        </div>
      <Footer theme={theme} />
      </div>
    </>
  )
}

export default Samplepage