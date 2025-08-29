import React from 'react'
import Dashboard from '../components/Dashboard'

function Home({show, theme}) {
  return (
    <div className="cont">
      <Dashboard show={show} theme={theme} />
    </div>
  )
}

export default Home