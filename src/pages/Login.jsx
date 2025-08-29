import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import favicon from '../favicon.svg'

function Login({show, setshowtop, theme}) {

  useEffect(() => {
    setshowtop(false)
    show(false)
  }, [])

  return (
    <>
    <div className="auth-bg">
        <span className="circle big-circle"></span>

        <span className="circle medium-circle"></span>

        <span className="circle small-circle"></span>
        
        <span className="circle medium-circle2"></span>

        <span className="circle small-circle2"></span>

        <span className="circle big-circle2"></span>
        <div className="logincontainer">
          <form action="" className={`login ${theme === 'dark' && 'dark'}`}>
            <div className="logologin">
              <img src={favicon} alt="" />
              <span>Datta Able</span>
            </div>
            <div className="loginheader">
              <span>login</span>
            </div>
            <div className="inputcontainer">
              <input type="email" placeholder='Email Address' className={`${theme === 'dark' && 'dark'}`} />
            </div>
            <div className="inputcontainer">
              <input type="password" placeholder='Password' className={`${theme === 'dark' && 'dark'}`} />
            </div>
            <div className="remember">
              <span>
                <input type="checkbox" name="rememberMe" id="remember" />
                <label htmlFor="remember" className="rememberlabel">Remember me?</label>
              </span>
              <span><Link className='loginlinks'>Forgort Password?</Link></span>
            </div>
            <div className="submitbtn">
              <input type="submit" value="Login" />
            </div>
            <div className="createacct">
              <span>
                Dont have an account ?. <Link to='/register' className='loginlinks'>Create Account</Link>
              </span>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default Login