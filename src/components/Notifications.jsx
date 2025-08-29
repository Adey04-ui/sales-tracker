import { useRef, useEffect } from 'react'
import avatar from './assets/avatar.jpg'
import male from './assets/avatarmale.jpg'

function Notifications({theme, shownoti, setshownoti}) {
    const notification = useRef(null)

  const Notificationinfo = [
    {
      gender: 'female',
      sender: 'UI/UX Design',
      day: 'today',
      time: '2 min ago',
      message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type`,
      type: 'no-option',
    },
    {
      gender: 'male',
      sender: 'Message',
      day: 'today',
      time: '1 hour ago',
      message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      type: 'no-option',
    },
    {
      gender: 'female',
      sender: 'Forms',
      day: 'yesterday',
      time: '2 hours ago',
      message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type`,
      type: 'no-option',
    },
    {
      gender: 'male',
      sender: 'Chalenge Invitation',
      day: 'yesterday',
      time: '12 hours ago',
      message: 'Jonny aber invites to join the challenge',
      type: 'option',
    },
    {
      gender: 'female',
      sender: 'Security',
      day: 'yesterday',
      time: '5 hours ago',
      message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type`,
      type: 'no-option',
    },
  ]

  useEffect(() => {
        function handleClickOutside(event) {
          if (notification.current && !notification.current.contains(event.target)) {
            setshownoti(false)
          }
        }
  
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        }
      }, [setshownoti])

  return (
    <div className={`notificationsdiv ${!shownoti ? 'notactive' : ''} ${theme === 'dark' && 'dark'}`} ref={notification}>
      <div className="notificationsheader">
        <span className="notiheader1">
          Notifications
        </span>
        <span className="notiheader2">
          Mark all read
        </span>
      </div>
      <div className="fullnotifications">
        <div className="notificationsheader2">
          <span>
            today
          </span>
        </div>
        <div className="indivnotification1">
          {Notificationinfo.map((noti)=> (
            <div className={`indivinotification2 ${noti.day !== 'today' && 'nodisplay'} ${theme === 'dark' && 'dark'}`}>
              <div className="notiimg">
                {noti.gender === 'male' && noti.day === 'today' ? <img src={male} className='notiimg2' /> : noti.gender === 'female' && noti.day === 'today' ? <img src={avatar} className='notiimg2' /> : ''}
              </div>
              <div className="mssg">
                <div className="messageheader">
                  <span className={`time2 ${theme === 'dark' && 'dark'}`}>
                    {noti.day === 'today' && noti.time}
                  </span>
                  <span className={`header4 ${theme === 'dark' && 'dark'}`}>
                    {noti.day === 'today' && noti.sender}
                  </span>
                  <span className="messagebody">
                    {noti.day === 'today' && noti.message}
                  </span>
                  {noti.type === 'option' && noti.day === 'today' && <span className="optionsbtns">
                    <button className="decline2">
                      Decline
                    </button>
                    <button className="accept2">
                      Accept
                    </button>
                  </span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="notificationsheader2">
          <span>
            yesterday
          </span>
        </div>
        <div className="indivnotification1">
          {Notificationinfo.map((noti)=> (
            <div className={`indivinotification2 ${noti.day !== 'yesterday' && 'nodisplay'} ${theme === 'dark' && 'dark'}`}>
              <div className="notiimg">
                {noti.gender === 'male' && noti.day === 'yesterday' && <img src={male} className='notiimg2' />}{noti.gender === 'female' && noti.day === 'yesterday' && <img src={avatar} className='notiimg2' />}
              </div>
              <div className="mssg">
                <div className="messageheader">
                  <span className={`time2 ${theme === 'dark' && 'dark'}`}>
                    {noti.day === 'yesterday' && noti.time}
                  </span>
                  <span className={`header4 ${theme === 'dark' && 'dark'}`}>
                    {noti.day === 'yesterday' && noti.sender}
                  </span>
                  <span className="messagebody">
                    {noti.day === 'yesterday' && noti.message}
                  </span>
                  {noti.type === 'option' && noti.day === 'yesterday' && <span className="optionsbtns">
                    <button className="decline2">
                      Decline
                    </button>
                    <button className="accept2">
                      Accept
                    </button>
                  </span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="clearnoti">
        <span>
          Clear all Notifications
        </span>
      </div>
    </div>
  )
}

export default Notifications