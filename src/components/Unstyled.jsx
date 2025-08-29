import React from 'react'

function Unstyled({theme}) {
  return (
    <div className={`unstyled ${theme === 'dark' && 'dark'}`}>
      <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
        <span>Unstyled</span>
      </div>
      <div className="unstyledelements">
        <ul style={{listStyleType: 'none'}}>
          <li style={{paddingBottom: '5px'}}>Lorem ipsum dolor sit amet</li>
          <li style={{paddingBottom: '5px'}}>Integer molestie lorem at massa</li>
          <ul style={{listStyleType: 'circle', marginLeft: '18px'}}>
            <li style={{paddingBottom: '5px'}}>Phasellus iaculis neque</li>
          </ul>
          <li style={{paddingBottom: '5px'}}>Faucibus porta lacus fringilla vel</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </div>
      <div className={`inlineheaderunstyled ${theme === 'dark' && 'dark'}`}>
        <span>Inline</span>
      </div>
      <div className="inlineunstyled">
        <ul style={{listStyleType: 'none', display: 'flex', flexWrap: 'wrap'}}>
          <li style={{padding: '15px 10px', fontWeight: '400', paddingBottom: '0px'}}>Lorem ipsum </li>
          <li style={{padding: '15px 10px', fontWeight: '400', paddingBottom: '0px'}}>Phasellus iaculis </li>
          <li style={{padding: '15px 10px', fontWeight: '400', paddingBottom: '0px'}}>Nulla volutpat</li>
        </ul>
      </div>
    </div>
  )
}

export default Unstyled