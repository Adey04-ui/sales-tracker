import React from 'react'
import Ratings from './Ratings'
import RecentUsers from './RecentUsers'

function Other({theme}) {
  return (
    <div className="container3">
      <Ratings theme={theme} />
      <RecentUsers theme={theme} />
    </div>
  )
}

export default Other