import React from 'react'
import { toast } from 'react-toastify'

function ThemeColors({theme}) {

    const themecolors = [
      {
        name: 'primary',
        allcolors: {
          colors: [
            '#b3e6fe',
            '#9fe0fd',
            '#77d2fd',
            '#4ec5fc',
            '#26b8fb',
            '#04a9f5',
            '#0383be',
            '#025d87',
            '#01374f',
            '#001118',
            '#070b0d',
          ],
          numbers: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, ],
        }
      },
      {
        name: 'secondary',
        allcolors: {
          colors: [
            '#bec6ce',
            '#b2bcc5',
            '#9ba8b4',
            '#8394a2',
            '#6d8090',
            '#5b6b79',
            '#434f59',
            '#2b3239',
            '#131619',
            '#0b0d0f',
            '#040506',
          ],
          numbers: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, ],
        }
      },
      {
        name: 'success',
        allcolors: {
          colors: [
            '#c4f9ec',
            '#b2f7e6',
            '#8df4da',
            '#67f0ce',
            '#42edc2',
            '#1de9b6',
            '#12bc91',
            '#0d896a',
            '#085542',
            '#03221b',
            '#010907',
          ],
          numbers: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, ],
        }
      },
      {
        name: 'danger',
        allcolors: {
          colors: [
            '#fee6e4',
            '#fcd3d1',
            '#faafaa',
            '#f88b83',
            '#f6665d',
            '#f44236',
            '#e51a0d',
            '#b0140a',
            '#7b0e07',
            '#460804',
            '#2b0502',
          ],
          numbers: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, ],
        }
      },
      {
        name: 'warning',
        allcolors: {
          colors: [
            '#fdf4da',
            '#fcefc6',
            '#fae39f',
            '#f8d879',
            '#f6cd52',
            '#f4c22b',
            '#dca80b',
            '#a67f09',
            '#715606',
            '#3c2d03',
            '#211902',
          ],
          numbers: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, ],
        }
      },
      {
        name: 'info',
        allcolors: {
          colors: [
            '#e4f6fc',
            '#d1f0fa',
            '#ace4f6',
            '#88d7f2',
            '#63cbee',
            '#3ebfea',
            '#18a8d8',
            '#1281a6',
            '#0d5a73',
            '#073241',
            '#041f27',
          ],
          numbers: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, ],
        }
      },
      {
        name: 'dark',
        allcolors: {
          colors: [
            '#73818e',
            '#6a7783',
            '#58626d',
            '#454e56',
            '#333940',
            '#212529',
            '#191c1f',
            '#121417',
            '#0e0f11',
            '#090a0b',
            '#020303',
          ],
          numbers: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, ],
        }
      },
    ]

  return (
    <div className={`themecolors ${theme === 'dark' && 'dark'}`}>
      <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
      <span>
        Theme Color
      </span>
      </div>
      <div className="themesseg">
      {themecolors.map((themecolor) => (
        <div className="themecolumns">
          
          <div className="themecolorfulldiv">
            <div className="themename">
            <span>
              {themecolor.name}
            </span>
          </div>
            {themecolor.allcolors.colors.map((color, index) => (
              <div className="individualcolorfulldiv">
                <div className="individualcolordiv" style={{backgroundColor: color}} onClick={()=> {
                                  navigator.clipboard.writeText(color)
                                  if (theme === 'dark') {
                                    toast.success(`Copied '${color}' to clipboard`,  {
                                      style: {
                                        background: '#2c2c2c'
                                      },
                                      progressStyle: {
                                        background: '#295d42'
                                      }
                                    })
                                  } else {
                                  toast.success(`Copied '${color}' to clipboard`)
                                  }
                                }
                                }>
                  
                </div>
                <span className='colorsindex'>
                  {themecolor.allcolors.numbers[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ThemeColors