import React ,  {  useRef }from 'react'
import './Login.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { CustomerLoginStart, CustomerLoginSuccess } from '../../actions/index'

import { images } from '../../constants'

const CustomerLogin = () => {

  const email = useRef();
  const password = useRef();

  const customer = useSelector( (state) => state.CustomerReducer )
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(CustomerLoginStart())
    
    try{
      const res = await axios.post("http://localhost:1234/customer/login", {
        email: email.current.value,
        password: password.current.value
      })
      dispatch(CustomerLoginSuccess({ payload: res.data}))
      console.log(res.data)
      window.location.replace('/restaurant/list')
    }catch(err){
      console.log(err)
    }
  }

  console.log(customer)
  return (
    <>
      <div className="home-container">
            <div className='loginOpt-container'>
                <h1 className='log log-rest'>Log in as ... <span>Customer</span></h1>
                <form action="" className='login-formControl' onSubmit={handleSubmit}>
                    <div className='login-inputFields'>
                      <label htmlFor="email">Email ID</label>
                      <input type="email" ref={email}/>
                      <label htmlFor="password">Password</label>
                      <input type="password" ref={password}/>
                    </div>
                    <input type='submit' value='Login'  />
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