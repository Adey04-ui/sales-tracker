import React from 'react'
import { FaFacebookF, FaGooglePlus, FaGooglePlusG } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Socials({theme}) {
  return (
    <div className='container-socials'>
      <div className={`socialscontainer single ${theme === 'dark' && 'dark'}`}>
        <div className="social">
          <div>
            <FaFacebookF size={35} className='facebook' />
          </div>
          <div className='secnddiv single'>
            <div className={`likesnumber ${theme === 'dark' && 'dark'}`}>12,281</div>
            <div className="details">
              <p className='percent2'>+7.2%</p>
              <p className='total'>Total Likes</p>
            </div>
          </div>
        </div>
        <div className="bars">
          <div className="bar">
            <p className="target">Target: 35,098</p>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{marginTop: '7px'}}>
              <div className="rategreen" style={{width: '60%'}}></div>
            </div>
          </div>
          <div className="bar">
            <p className="duration">Duration: 350</p>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{marginTop: '7px'}}>
              <div className="ratepurple" style={{width: '40%'}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`socialscontainer double ${theme === 'dark' && 'dark'}`}>
        <div className="social">
          <div>
            <FaXTwitter size={35} className={`${theme === 'dark' && 'xtwitter dark'}`} />
          </div>
          <div className='secnddiv double'>
            <div className={`likesnumber ${theme === 'dark' && 'dark'}`}>11,200</div>
            <div className="details">
              <p className='percent3'>+6.2%</p>
              <p className='total'>Total Likes</p>
            </div>
          </div>
        </div>
        <div className="bars">
          <div className="bar">
            <p className="target">Target: 34,185</p>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{marginTop: '7px'}}>
              <div className="rategreen" style={{width: '35%'}}></div>
            </div>
          </div>
          <div className="bar">
            <p className="duration">Duration: 800</p>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{marginTop: '7px'}}>
              <div className="rateblue" style={{width: '70%'}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`socialscontainer double ${theme === 'dark' && 'dark'}`}>
        <div className="social">
          <div>
            <FaGooglePlusG size={35} className='google' />
          </div>
          <div className='secnddiv double'>
            <div className={`likesnumber ${theme === 'dark' && 'dark'}`}>10,500</div>
            <div className="details">
              <p className='percent3'>+5.9%</p>
              <p className='total'>Total Likes</p>
            </div>
          </div>
        </div>
        <div className="bars">
          <div className="bar">
            <p className="target">Target: 25,998</p>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{marginTop: '7px'}}>
              <div className="rategreen" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className="bar">
            <p className="duration">Duration: 900</p>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`} style={{marginTop: '7px'}}>
              <div className="ratepurple" style={{width: '45%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Socials