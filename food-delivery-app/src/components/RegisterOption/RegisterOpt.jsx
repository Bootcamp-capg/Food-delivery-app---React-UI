import React from 'react'
import './RegisterOpt.css'
import { Link } from 'react-router-dom'

import { images } from '../../constants'

const RegisterOpt = () => {
  return (
  <>
    <div className='registerOpt-container'>
      <h1 className='join'>Join <span>us</span> ! as a ...</h1>
      <div className='reg-option'>
        <Link to='/register/restaurant' className='regOpt-box'>
          <div className='regOpt-image'>
            <img src={images.image5} alt="" />
          </div>
          <h1>Restaurant</h1>
        </Link>
        <Link to='/register/customer' className='regOpt-box'>
          <div className='regOpt-image'>
            <img src={images.image6} alt="" />
          </div>
          <h1>Customer</h1>
        </Link>
      </div>
      <p className='already-user'>Already a user ? <Link className='signIn' to='/login'>Sign In</Link></p>
    </div>
  </>
  )
}

export default RegisterOpt