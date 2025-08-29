import React from 'react'
import { FaCircle, FaDotCircle } from 'react-icons/fa'
import { FaCircleDot } from 'react-icons/fa6'
import avatar from './assets/avatar.jpg'
import avatarmale from './assets/avatarmale.jpg'

function RecentUsers({theme}) {
  const recentUsers = [
    {
      id: 1,
      name: 'isabella christensen',
      message: 'Lorem Ipsium is simply a dummy text of...',
      status: 'green',
      gender: 'female',
      time: '11 may 12:56'
    },
    {
      id: 2,
      name: 'mathilde andersen',
      message: 'Lorem Ipsium is simply a dummy text of...',
      status: 'red',
      gender: 'male',
      time: '11 may 10:35'
    },
    {
      id: 3,
      name: 'karla sorensen',
      message: 'Lorem Ipsium is simply a dummy text of...',
      status: 'green',
      gender: 'female',
      time: '9 may 17:38'
    },
    {
      id: 4,
      name: 'ida jorgensen',
      message: 'Lorem Ipsium is simply a dummy text of...',
      status: 'red',
      gender: 'female',
      time: '19 may 12:56'
    },
    {
      id: 5,
      name: 'albert andersen',
      message: 'Lorem Ipsium is simply a dummy text of...',
      status: 'green',
      gender: 'male',
      time: '21 july 12:56'
    },
  ]
  return (
    <div className={`recentusers ${theme === 'dark' && 'dark'}`}>
      <div className="firstdivrating">
        <p>Recent Users</p>
      </div>
      <div className="container10">
        {recentUsers.map((recentUser) => (
          <div className='container4' key={recentUser.id}>
            <div className="container9">
              {recentUser.gender === 'male' ? <img className='profile' src={avatarmale} /> : <img className='profile' src={avatar} alt="profile" />}
            </div>
            <div className="container5">
            <span className='name'>{recentUser.name}</span>
            <span className='message'>{recentUser.message}</span>
            </div>
            <div className="container6">
              {recentUser.status === 'green' ? <FaCircle size={10} style={{color: '#1de9b6'}} /> : <FaCircle size={10} style={{color: '#f24136'}} />}
            </div>
            <div className="container7">
              {recentUser.time}
            </div>
            <div className="container8">
              <button className="reject">
                Reject
              </button>
              <button className="approve">
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentUsers