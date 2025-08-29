import React from 'react'
import Inline from './Inline'
import Contextual from './Contextual'

function InlineAndContextual({theme}) {
  return (
    <div className='wrapper3'>
      <Inline theme={theme} />
      <Contextual theme={theme} />
    </div>
  )
}

export default InlineAndContextual