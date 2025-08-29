import React from 'react'

function HorizontalD({theme}) {
  return (
    <div className={`horizontald ${theme === 'dark' && 'dark'}`}>
      <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
        <span>horizontal description</span>
      </div>
      <div className="inlineelements">
        <div className="descriptionrow">
          <div className='leftside'>
            <span>Description List</span>
          </div>
          <div className='rightside'>
            <span>A description list is perfect for defining terms.</span>
          </div>
        </div>
        <div className="descriptionrow">
          <div className='leftside'>
            <span>Euismod</span>
          </div>
          <div className='rightside'>
            <span>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</span>
          </div>
        </div>
        <div className="descriptionrow">
          <div className='rightside'>
            <span>Donec id elit non mi porta gravida at eget metus.</span>
          </div>
          <div className='leftside'>
            <span>Malesuada porta</span>
          </div>
        </div>
        <div className="descriptionrow">
          <div className='rightside'>
            <span>Etiam porta sem malesuada magna mollis euismod.</span>
          </div>
          <div className='leftside'>
            <span>Truncated term is truncated</span>
          </div>
        </div>
        <div className="descriptionrow">
          <div className='rightside'>
            <span>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalD