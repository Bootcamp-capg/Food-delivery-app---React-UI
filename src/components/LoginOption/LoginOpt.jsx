import React from 'react'
import './LoginOpt.css'
import{ Link } from 'react-router-dom'

import { images } from '../../constants';

const LoginOpt = () => {
  return (
    <>
        <div className="home-container">
            <div className='loginOpt-container'>
                <h1 className='log'>Log in as...</h1>
                <div className='log-option'>
                    <Link to='/login/restaurant' className='logOpt-box'>
                    <div className='logOpt-image'>
                        <img src={images.image5} alt="" />
                    </div>
                    <h1>Restaurant</h1>
                    </Link>
                    <Link to='/login/customer' className='logOpt-box'>
                    <div className='logOpt-image'>
                        <img src={images.image6} alt="" />
                    </div>
                    <h1>Customer</h1>
                    </Link>
                </div>
                <p className='already-user'>Happy to connect with you again !</p>
            </div>
            <div class="image">
                <img src={images.image2} alt="" />
            </div>
        </div>
    </>
  )
}

export default LoginOpt