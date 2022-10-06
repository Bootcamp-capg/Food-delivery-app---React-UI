import React ,  { useContext, useRef }from 'react'
import './Login.css'
import axios from 'axios'
import { Context } from '../../context/Context';


import { images } from '../../constants'

const CustomerLogin = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch } = useContext(Context)


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START"});

    try{
      const res = await axios.post("", {
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
    }catch(err){
      
    }
  }
  return (
    <>
      <div className="home-container">
            <div className='loginOpt-container'>
                <h1 className='log log-rest'>Log in as ... <span>Customer</span></h1>
                <form action="" className='login-formControl' onSubmit={handleSubmit}>
                    <div className='login-inputFields'>
                      <label htmlFor="email">Email ID</label>
                      <input type="email" ref={emailRef}/>
                      <label htmlFor="password">Password</label>
                      <input type="password" ref={passwordRef}/>
                    </div>
                    <input type='submit' value='Login' className='alink' />
                </form>
            </div>
            <div class="image">
                <img src={images.image4} alt="" />
            </div>
        </div>
    </>
  )
}

export default CustomerLogin