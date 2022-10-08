import React , { useRef } from 'react'
import './Login.css'
import axios from 'axios'
import { images } from '../../constants'
import { useSelector, useDispatch } from 'react-redux'
import { LoginStart, LoginSuccess } from '../../actions/index'

const RestaurantLogin = () => {

  const email = useRef();
  const password = useRef();

  const restaurant = useSelector( (state) => state.Reducer )
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginStart());
    try{
      const res = await axios.post('http://localhost:1234/restaurant/login', {
        email: email.current.value,
        password: password.current.value
      })
      dispatch(LoginSuccess({payload: res.data}));
      window.location.replace("/foods")  
    }catch(err){
      console.log("Invalid Credentials!");
    }
  }

  console.log(restaurant)



  return (
    <>
      <div className="home-container">
            <div className='loginOpt-container'>
                <h1 className='log log-rest'>Log in as ... <span>Restaurant</span></h1>
                <form action="" className='login-formControl' onSubmit={handleSubmit}>
                    <div className='login-inputFields'>
                      <label htmlFor="">Email ID</label>
                      <input type="email"  ref={email}/>
                      <label htmlFor="">Password</label>
                      <input type="password"  ref={password}/>
                    </div>
                    <input value='Login' type='submit' href='foods' className='alink' />
                </form>
            </div>
            <div class="image">
                <img src={images.image3} alt="" />
            </div>
        </div>
    </>
  )
}

export default RestaurantLogin