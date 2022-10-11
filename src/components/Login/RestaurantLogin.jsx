import React , { useRef } from 'react'
import './Login.css'
import axios from 'axios'
import { useState } from 'react'
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
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    dispatch(LoginStart());
    try{
      const res = await axios.post('http://localhost:1234/restaurant/login', {
        email: email.current.value,
        password: password.current.value
      })
      dispatch(LoginSuccess({payload: res.data}));
      window.location.replace("/foods")  
    }catch(err){
       alert("Invalid Credentials!");
    }
  }

  // console.log(restaurant)

  
  const initalValues = { email: "" , password: ""};
  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
  }

  const validate = (values) => {
    const errors = {}
    const regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.email) {
      errors.email = "Email is required";
    } else if(!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    
    if(!values.password) {
      errors.password = "Password is required";
    } else if(values.password < 4 ) {
      errors.password = "Password must be more than 4 characters";
    } else if(values.password > 10 ) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }

  return (
    <>
      <div className="home-container">
            <div className='loginOpt-container'>
                <h1 className='log log-rest'>Log in as ... <span>Restaurant</span></h1>
                <form action="" className='login-formControl' onSubmit={handleSubmit}>
                    <div className='login-inputFields'>
                      <label htmlFor="">Email ID</label>
                      <input type="email"  ref={email} value={formValues.email} 
                        onChange={handleChange} name='email'/>
                         <span>{formErrors.email}</span>
                      <label htmlFor="">Password</label>
                      <input type="password"  ref={password} value={formValues.password} 
                        onChange={handleChange} name='password'/>
                         <span>{formErrors.password}</span>
                    </div>
                    <input value='Login' type='submit' href='foods'  />
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