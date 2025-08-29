import { useState, useRef, useEffect } from 'react'
import { Bell, Headphones, Lock, LogOut, Menu, Moon, Power, Search, Settings, Share, Share2, Sun, User } from 'react-feather'
import avatar from './assets/avatarmale.jpg'
import { BiLock } from 'react-icons/bi'
import Notifications from './Notifications'

function Navbar2({hide, setTheme, theme, showtop}) {
  
  const collapse = () => {
    hide((prev) => !prev)
  }

 
  const [themediv, setThemediv] = useState(false)
  const [profile, setProfile] = useState(false)
  const [setting, setSetting] = useState(false)
  const [searchs, setsearchs] = useState(false)
  const [shownoti, setshownoti] = useState(false)
  const themes = useRef(null)
  const profiles = useRef(null)
  const settings = useRef(null)
  const search = useRef(null)
  const notification = useRef(null)

  const showthemediv = () => {
    setThemediv((prev) => !prev)
  }
  
      const lightTheme = () => {
        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        setTheme('light');
      };

      const darkTheme = () => {
        setTheme('dark');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      };

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log(prefersDark)

      const defaultTheme = () => {
        if (prefersDark) {
           setTheme('dark')
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
         } else { 
          setTheme('light')
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
          }
      }
      
    useEffect(() => {
      function handleClickOutside(event) {
        if (themes.current && !themes.current.contains(event.target)) {
          setThemediv(false)
        }
        if (profiles.current && !profiles.current.contains(event.target)) {
          setProfile(false)
        }
        if (settings.current && !settings.current.contains(event.target)) {
          setSetting(false)
        }
        if (search.current && !search.current.contains(event.target)) {
          setsearchs(false)
        }
        if (notification.current && !notification.current.contains(event.target)) {
          setshownoti(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [])

  return (
    <div className={`navbar ${!showtop && 'hide'} ${theme === 'dark' && 'dark'}`}>
      <ul>
        <li onClick={collapse}><Menu size={19} className='nav2icons' /></li>
        <li onClick={()=> setsearchs((prev)=> !prev)}><Search size={19} className='nav2icons' /></li>
        <div className={`inputnav ${!searchs ? 'notactive' : ''} ${theme === 'dark' && 'dark'}`} ref={search}>
          <input type="search" placeholder='Search here...' className='maininput' />
        </div>
      </ul>
      <ul>
        <div className={`themes ${!themediv ? 'notactive' : ''}`} ref={themes}>
          <ul className={`${theme === 'dark' && 'dark'}`}>
            <li onClick={darkTheme}><Moon size={19} className='themeicon' /> Dark</li>
            <li onClick={lightTheme}><Sun size={19} className='themeicon' /> Light</li>
            <li onClick={defaultTheme}><Settings size={19} className='themeicon' /> Default</li>
          </ul>
        </div>
        <li>{theme === 'dark' ? <Moon size={19} className='nav2icons' onClick={showthemediv} /> : <Sun size={19} className='nav2icons' onClick={showthemediv} />}</li>
        <div className={`themes2 ${!setting ? 'notactive' : ''}`} ref={settings}>
          <ul className={`${theme === 'dark' && 'dark'}`}>
            <li><User size={19} className='themeicon' /> My Account</li>
            <li><Settings size={19} className='themeicon' /> Settings</li>
            <li><Headphones size={19} className='themeicon' /> Support</li>
            <li><BiLock size={21} className='themeicon' /> Lock Screen</li>
            <li><Power size={19} className='themeicon' /> Logout</li>
          </ul>
        </div>
        <li onClick={()=> setSetting((prev)=> !prev)}><Settings size={19} className='nav2icons' /></li>

        <Notifications theme={theme} shownoti={shownoti} setshownoti={setshownoti} />

        
        <li onClick={()=> setshownoti((prev) => !prev)}>
          <Bell size={19} className='nav2icons' />
          <span className="unreadcount">
            3
          </span>
          </li>
        <div ref={profiles} className={`fulldivprofile ${!profile ? 'notactive' : ''} ${theme === 'dark' && 'dark'}`}>
          <div className="full2">
            <div className='profileimgdiv'>
              <img src={avatar} alt="" className='profileuserimg' />
            </div>
            <div className='profileinfodiv'>
              <span>
                Carson Darrin
              </span>
              <span>
                carson.darrin@caompany.io
              </span>
            </div>
          </div>
          <div className="profileuseroptions">
            <span className={`profileoptions ${theme === 'dark' && 'dark'}`}>
              <Settings size={18} style={{marginRight: '10px', marginLeft: '10px'}} /> Settings
            </span>
            <span className={`profileoptions ${theme === 'dark' && 'dark'}`}>
              <Share2 size={18} style={{marginRight: '10px', marginLeft: '10px'}} />Share
            </span>
            <span className={`profileoptions ${theme === 'dark' && 'dark'}`} style={{marginBottom: '10px'}}>
              <Lock size={18} style={{marginRight: '10px', marginLeft: '10px'}} />Change Password
            </span>
            <span className="logoutbtn">
              <LogOut size={18} style={{marginRight: '10px', marginLeft: '10px'}} />Logout
            </span>
          </div>
        </div>
        <li onClick={()=> setProfile((prev)=> !prev)}>
          <User size={19} className='nav2icons' /></li>
      </ul>
    </div>
  )
}

export default Navbar2