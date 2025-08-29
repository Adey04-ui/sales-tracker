import React from 'react'
import { FaSortUp, FaStar } from 'react-icons/fa'

function Ratings({theme}) {
  return (
    <div className={`ratings ${theme === 'dark' && 'dark'}`}>
        <div className="firstdivrating">
          <p>Rating</p>
        </div>
        <div className="averagestars">
          <span className='star'>4.7 <FaStar className='staricon' /></span><span className='starincrease'>0.4 <FaSortUp size={23} className='sortup' /></span>
        </div>
        <div className="ratingswrapper">
          <div className="individual">
            <div className="individual2">
              <span><FaStar className='staricon' /> 5</span><span className='numberofrates'>384</span>
            </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{width: '100%', marginTop: '10px'}}>
              <div className="rategreen" style={{width: '70%'}}></div>
            </div>
          </div>
          <div className="individual">
            <div className="individual2">
              <span><FaStar className='staricon' /> 4</span><span className='numberofrates'>145</span>
            </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{width: '100%', marginTop: '10px'}}>
              <div className="rategreen" style={{width: '42%'}}></div>
            </div>
          </div>
          <div className="individual">
            <div className="individual2">
              <span><FaStar className='staricon' /> 3</span><span className='numberofrates'>24</span>
            </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{width: '100%', marginTop: '10px'}}>
              <div className="rategreen" style={{width: '35%'}}></div>
            </div>
          </div>
          <div className="individual">
            <div className="individual2">
              <span><FaStar className='staricon' /> 2</span><span className='numberofrates'>1</span>
            </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{width: '100%', marginTop: '10px'}}>
              <div className="rategreen" style={{width: '15%'}}></div>
            </div>
          </div>
          <div className="individual">
            <div className="individual2">
              <span><FaStar className='staricon' /> 1</span><span className='numberofrates'>0</span>
            </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{width: '100%', marginTop: '10px'}}>
              <div className="rategreen" style={{width: '0%'}}></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Ratings