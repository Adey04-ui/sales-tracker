import React from 'react'
import Unordered from './Unordered'
import Ordered from './Ordered'
import Unstyled from './Unstyled'
import Blockquotes from './Blockquotes'
import HorizontalD from './HorizontalD'
import Footer from './Footer'

function Lists({theme}) {
  return (
    <>
      <div className="lists">
        <Unordered theme={theme} />
        <Ordered theme={theme} />
        <Unstyled theme={theme} />
        <Blockquotes theme={theme} />
        <HorizontalD theme={theme} />
      </div>
      <Footer theme={theme} />
    </>
  )
}

export default Lists