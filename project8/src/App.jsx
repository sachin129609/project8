import { useState } from 'react'
import './App.css'

export default function App() {
  const IMGURL = import.meta.env.BASE_URL
  const [isLoginView, setIsLoginView] = useState(true)
  const [tooglePassword, setTooglePassword] = useState("password")

  function switchView() {
    setIsLoginView(!isLoginView)
  }

  function tooglePwd() {
    setTooglePassword(
      tooglePassword === "password" ? "text" : "password"
    )
  }

  return (
    <div className='app'>

      {isLoginView && (
        <div className='login-container'>
          <h2>Sign in with email</h2>

          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "img4.png"} alt="" />
            <input type='text' placeholder='Enter email ID' />
          </div>

          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "img2.png"} alt="" />
            <input
              type={tooglePassword}
              placeholder='Enter a valid password'
            />
            <img
              className='right-icon'
              src={IMGURL + "img1.png"}
              alt=""
              onClick={tooglePwd}
            />
          </div>

          <button>Sign in</button>
          <p>
            Don't have an account?
            <label onClick={switchView}> Sign up</label>
          </p>
        </div>
      )}

      {!isLoginView && (
        <div className='login-container'>
          <h2>Register for new account</h2>

          <div className='input-group'>
            <input type='text' placeholder='Full Name' />
          </div>

          <div className='input-group'>
            <input type='text' placeholder='Last Name' />
          </div>

          <div className='input-group'>
            <input type='text' placeholder='Phone Number' />
          </div>

          <div className='input-group'>
            <input type='password' placeholder='Password' />
          </div>

          <button>Create Account</button>

          <p>
            Already have an account?
            <label onClick={switchView}> Sign in</label>
          </p>
        </div>
      )}

    </div>
  )
}














































































































