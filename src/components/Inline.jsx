import React from 'react'

function Inline({theme}) {
  return (
    <>
    <div className={`inline ${theme === 'dark' && 'dark'}`}>
      <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
        <span>inline text elements</span>
      </div>
      <div className="inlineelements">
        <span>
          Your title goes here
        </span>
        <br />
        <span>
          You can use the mark tag to <mark>highlight</mark> text.
        </span>
        <br />
        <span>
          <strike>This line of text is meant to be treated as deleted text.</strike>
        </span>
        <br />
        <span style={{textDecoration: 'underline'}}>
          This line of text is meant to be treated as an addition to the document.
        </span>
        <br />
        <span>
          <b>rendered as bold text</b>
        </span>
        <br />
        <span>
          <i>rendered as italicized text</i>
        </span>
      </div>
    </div>
    </>
  )
}

export default Inline