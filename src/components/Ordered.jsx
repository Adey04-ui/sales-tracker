import React from 'react'

function Ordered({theme}) {
  return (
    <div className={`unordered ${theme === 'dark' && 'dark'}`}>
      <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
        <span>Ordered</span>
      </div>
      <div className="inlineelements" style={{paddingLeft: '40px'}}>
        <ol>
          <li style={{paddingBottom: '5px'}}>Lorem ipsum dolor sit amet</li>
          <li style={{paddingBottom: '5px'}}>Consectetur adipiscing elit</li>
          <li style={{paddingBottom: '5px'}}>Integer molestie lorem at massa</li>
          <li style={{paddingBottom: '5px'}}>Facilisis in pretium nisl aliquet</li>
          <li style={{paddingBottom: '5px'}}>Nulla volutpat aliquam velit</li>
          <ul style={{listStyleType: 'circle', marginLeft: '18px'}}>
            <li style={{paddingBottom: '5px'}}>Phasellus iaculis neque</li>
            <li style={{paddingBottom: '5px'}}>Purus sodales ultricies</li>
            <li style={{paddingBottom: '5px'}}>Vestibulum laoreet porttitor sem</li>
            <li style={{paddingBottom: '5px'}}>Ac tristique libero volutpat at</li>
          </ul>
          <li style={{paddingBottom: '5px'}}>Faucibus porta lacus fringilla vel</li>
          <li style={{paddingBottom: '5px'}}>Aenean sit amet erat nunc</li>
          <li style={{paddingBottom: '5px'}}>Eget porttitor lorem</li>
        </ol>
      </div>
    </div>
  )
}

export default Ordered