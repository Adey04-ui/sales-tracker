import React from 'react'
import { useState } from 'react'
import * as Icons from 'react-feather'

function Iconsdiv({theme}) {
  
    const [search, setSearch] = useState('')

    const filteredIcons = Object.entries(Icons).filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase())
    )

    const [activeId, setActiveId] = useState(null)

  return (
    <div style={{
                  borderRadius: '2px',
      }} className={`wrapper2 ${theme === 'dark' && 'dark'}`}>
        <div className='feather-icon-firstdiv'>
          <span className='boldtext'>
            Feather icon 
          </span>
          <span>
            use svg icon with <span className='redtext'>{`<i data-feather="<< copied code >>">`}</span>
            in your html code 
          </span>
        </div>
        <div className="fulliconsdiv">
          <input type="text" className={`searchicons ${theme === 'dark' && 'dark'}`} name="searchicons" id="iconssearch" placeholder='Search ..' value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="allicons">
            {filteredIcons.map(([name, IconComponent]) => (
              <div className={`singleicons ${theme === 'dark' && 'dark'}`} key={name} onClick={() => {
                  navigator.clipboard.writeText(name)
                    .then(() => {
                      setActiveId(name)
                      setTimeout(() => {
                        setActiveId(null)
                      }, 3000)
                    })
                    .catch((err) => {
                      console.error('Failed to copy: ', err)
                    })
                }
                }>
                <IconComponent size={20} style={{color: '#8f8f8fff',
                  cursor: 'pointer'
                }} iconComponent={IconComponent} />
                
                <span className={`copymessage ${activeId === name && 'active'}`}>copied!</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Iconsdiv