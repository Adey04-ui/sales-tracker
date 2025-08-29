import React from 'react'

function Headings({theme}) {
  return (
    <div className={`headings ${theme === 'dark' && 'dark'}`}>
      <div className={`headingsheader ${theme === 'dark' && 'dark'}`}>
          <span>Headings</span>
        </div>
        <div className="headingslist">
          <h1>h1. Heading</h1>
          <h2>h2. Heading</h2>
          <h3>This is a H3</h3>
          <h4>This is a H4</h4>
          <h5>This is a H5</h5>
          <h6>This is a H6</h6>
        </div>
    </div>
  )
}

export default Headings