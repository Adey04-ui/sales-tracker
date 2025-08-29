import React, { useEffect } from 'react'
import notfoundimg from './assets/404.png'

function NotFound({show, theme}) {
  useEffect(() => {
    show(false)
  }, [])

  return (
    <div className={`notfound ${theme === "dark" && 'dark'}`}>
      <h2>
        The Page You Are Looking For is Not Available
      </h2>
      <img className='notfoundimg' src={notfoundimg} alt="" />
    </div>
  )
}

export default NotFound