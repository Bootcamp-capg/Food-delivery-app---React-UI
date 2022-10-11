import React ,  {  useRef, useState }from 'react'
import './Login.css'
import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux'
// import { CustomerLoginStart, CustomerLoginSuccess } from '../../actions/index'

import { images } from '../../constants'

const CustomerLogin = () => {

  const email = useRef();
  const password = useRef();

  // const customer = useSelector( (state) => state.CustomerReducer )
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // dispatch(CustomerLoginStart())
    
    try{
      const res = await axios.post("http://localhost:1234/customer/login", {
        email: email.current.value,
        password: password.current.value
      })
      // dispatch(CustomerLoginSuccess({ payload: res.data}))
      console.log(res.data)
      window.location.replace('/')
    }catch(err){
      alert("Invalid Credentials!");   
    }
  }

  // console.log(customer)
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
                <h1 className='log log-rest'>Log in as ... <span>Customer</span></h1>
                <form action="" className='login-formControl' onSubmit={handleSubmit}>
                    <div className='login-inputFields'>
                      <label htmlFor="email">Email ID</label>
                      <input type="email" name='email' ref={email} value={formValues.email} 
                        onChange={handleChange}
                      />
                      <span>{formErrors.email}</span>
                      <label htmlFor="password">Password</label>
                      <input type="password" name='password' ref={password} value={formValues.password}
                      onChange={handleChange}
                      />
                      <span>{formErrors.password}</span>
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