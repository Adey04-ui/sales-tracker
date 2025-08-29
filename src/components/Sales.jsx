import React from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { FaGreaterThan } from 'react-icons/fa';
import { ArrowUp } from 'react-feather';

function Sales({theme}) {
  return (
    <div className="container">
        <div className={`container2 double ${theme === 'dark' && 'dark'}`}>
          <p>Daily Sales</p>
            <div className="price">
            <BsArrowUp size={26} className='arrow-green' />
              $ 249.95
              <p className='percentage double'>67%</p>
            </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`}>
              <div className="rate1"></div>
            </div>
        </div>
        <div className={`container2 double ${theme === 'dark' && 'dark'}`}>
          <p>Monthly Sales</p>
          <div className="price">
            <BsArrowDown size={26} className='arrow-red' />
            $ 2,942.32
            <p className='percentage double'>36%</p>
          </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`}>
              <div className="rate3"></div>
            </div>
        </div>
        <div className={`container2 single ${theme === 'dark' && 'dark'}`}>
          <p>Yearly Sales</p>
          <div className="price">
            <BsArrowUp size={26} className='arrow-green' />
            $ 8,638.32
            <p className='percentage single'>80%</p>
          </div>
            <div className={`ratesbar ${theme === 'dark' && 'dark'}`}>
              <div className="rate2"></div>
            </div>
        </div>
      </div>
  )
}

export default Sales