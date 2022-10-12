import React, { useEffect, useState} from 'react'
import './Home.css'
import Button from '../Button/Button'
import { useSelector } from 'react-redux';
import { images } from '../../constants';

const Home = () => {


    const restaurant = useSelector((state) => state.Reducer)
    const customer = useSelector((state) => state.CustomerReducer)

    // const[cust, setCust] = useState(false);
    // const[rest, setRest] = useState(false);

    // useEffect(() => {
    //     if(restaurant!=null){
    //         setRest(true)
    //     }else{
    //         setRest(false)
    //     }
    // },[restaurant])

    // useEffect(() => {
    //     if(customer!=null){
    //         setCust(true)
    //     }else{
    //         setCust(false)
    //     }
    // },[customer])

  return (
    <>
        <div className="home-container">
            <div className="home-section">
                <h3 className='home-tagline'>Love ordering food !! <br/> You will love us.</h3>
                <p className='home-para'>Welcome to the best food delivery service in the town. One Click, one order and you get the food delivered.</p>
                
                {/* { rest || cust ? (<div></div>):( */}
                <div className='home-links'>
                    <Button value='Register' href='register'/>
                    <Button value='Login' href='login'/>
                </div> 
                {/* )} */}
                
            </div>
            <div class="image">
                <img src={images.image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Home