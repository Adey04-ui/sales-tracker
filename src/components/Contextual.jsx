import React from 'react'

function Contextual({theme}) {
  return (
    <div className={`contextual ${theme === 'dark' && 'dark'}`}>
      <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
        <span>contextual text colors</span>
      </div>
      <div className="inlineelements">
        <span>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
        </span>
        <br />
        <span style={{color: '#04a9f7', paddingBottom: '10px'}}>
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </span>
        <br />
        <span style={{color: '#1de9b8', paddingBottom: '5px'}}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </span>
        <br />
        <span style={{color: '#57cbed', paddingBottom: '5px'}}>
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </span>
        <br />
        <span style={{color: '#f4c22b', paddingBottom: '5px'}}>
          Etiam porta sem malesuada magna mollis euismod.
        </span>
        <br />
        <span style={{color: '#f44236', paddingBottom: '5px'}}>
          Donec ullamcorper nulla non metus auctor fringilla.
        </span>
        <br />
        <span style={{paddingBottom: '5px'}}>
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </span>
      </div>
    </div>
  )
}

export default Contextual