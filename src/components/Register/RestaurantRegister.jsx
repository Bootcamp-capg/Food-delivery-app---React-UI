import React, { useState, useEffect } from 'react'
import './Register.css'
import { images } from '../../constants'
import axios from 'axios'

const Register = () => {

  const initalValues = { restaurantName: "" , restaurantAddress:"", restaurantContact:"", email:"", password: ""};
  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
  }


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try{
        const res = axios.post("http://localhost:1234/restaurant/add/dto", 
         formValues
        )
        window.location.replace("/login");
        alert("Restaurant has been Registered")
      }catch(err){
        console.log(err);
      }  
    }
  }, [formErrors]);

  const handled = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }


  const validate = (values) => {
    const errors = {}
    const regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexContact = /^\s*-?[0-9]{1,10}\s*$/;
    const regexTest = /^[a-zA-Z ]*$/;

    if(!values.restaurantName) {
      errors.restaurantName = "Name is required";
    }  else if(values.restaurantName.length < 4 ) {
      errors.restaurantName = "Name must be more than 3 characters";
    } else if(values.restaurantName.length > 15 ) {
      errors.restaurantName = "Name cannot exceed more than 15 characters";
    } else if(!regexTest.test(values.restaurantName)) {
      errors.restaurantName = "Only text characters allowed";
    }

    if(!values.restaurantAddress) {
      errors.restaurantAddress = "City is required";
    } else if(values.restaurantAddress.length < 4 ) {
      errors.restaurantAddress = "City must be more than 3 characters";
    } else if(values.restaurantAddress.length > 10 ) {
      errors.restaurantAddress = "City cannot exceed more than 10 characters";
    }

    if(!values.restaurantContact) {
      errors.restaurantContact = "Contact is required";
    } else if(!regexContact.test(values.restaurantContact)) {
      errors.restaurantContact = "Enter a valid number";
    }
    
    if(!values.email) {
      errors.email = "Email is required";
    } else if(!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    
    if(!values.password) {
      errors.password = "Password is required";
    } else if(values.password.length < 4 ) {
      errors.password = "Password must be more than 4 characters";
    } else if(values.password.length > 10 ) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }

  return (
    <div className='section reg'>  
      <div className='regImg'>
        <img src={images.image5} alt="" />
      </div>
      <form action="" className='formControl' onSubmit={handled}>
      <h1 className='register'>Register as <span>Restaurant</span></h1>
        <div className='inputFields'>
        <label htmlFor="name">Restaurant Name</label>
          <input type="text" value={formValues.restaurantName} onChange={handleChange} name='restaurantName'/>
          <span>{formErrors.restaurantName}</span>
          <label htmlFor="address">City</label>
          <input type="text" value={formValues.restaurantAddress} onChange={handleChange} name='restaurantAddress'/>
          <span>{formErrors.restaurantAddress}</span>
          <label htmlFor="contact">Contact</label>
          <input type="number" value={formValues.restaurantContact} onChange={handleChange} name='restaurantContact'/>
          <span>{formErrors.restaurantContact}</span>
          <label htmlFor="email">Restaurant Email</label>
          <input type="email" value={formValues.email} onChange={handleChange} name='email'/>
          <span>{formErrors.email}</span>
          <label htmlFor="password">Password</label>
          <input type="password" value={formValues.password} onChange={handleChange} name='password'/>
          <span>{formErrors.password}</span>
        </div>
        <input value='Register'  type='submit' />
        {/* { error && console.log(error) } */}
      </form>
    </div>
  )
}

export default Register