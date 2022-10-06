import React from 'react'
import './Home.css'
import Button from '../Button/Button'

import { images } from '../../constants';

const Home = () => {
  return (
    <>
        <div className="home-container">
            <div className="home-section">
                <h3 className='home-tagline'>Love ordering food !! <br/> You will love us.</h3>
                <p className='home-para'>Welcome to the best food delivery service in the town. One Click, one order and you get the food delivered.</p>
                <div className='home-links'>
                    <Button value='Register' href='register'/>
                    <Button value='Login' href='login'/>
                </div>
            </div>
            <div class="image">
                <img src={images.image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Home