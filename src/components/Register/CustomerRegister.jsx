import React , { useState, useEffect } from 'react'
import './Register.css'
import { images } from '../../constants'
import axios from 'axios'

const Customer = () => {


  const initalValues = { name: "" , customerAddress:"", customerContact:"", email:"", password: ""};
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
        const res = axios.post("http://localhost:1234/customer/add/dto", 
         formValues
        )
        window.location.replace("/login");
        alert("Customer has been Registered")
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

    if(!values.name) {
      errors.name = "Name is required";
    }  else if(values.name.length < 4 ) {
      errors.name = "Name must be more than 3 characters";
    } else if(values.name.length > 15 ) {
      errors.name = "Name cannot exceed more than 15 characters";
    } else if(!regexTest.test(values.name)) {
      errors.name = "Only text characters allowed";
    }

    if(!values.customerAddress) {
      errors.customerAddress = "City is required";
    } else if(values.customerAddress.length < 4 ) {
      errors.customerAddress = "City must be more than 3 characters";
    } else if(values.customerAddress.length > 10 ) {
      errors.customerAddress = "City cannot exceed more than 10 characters";
    }

    if(!values.customerContact) {
      errors.customerContact = "Contact is required";
    } else if(!regexContact.test(values.customerContact)) {
      errors.customerContact = "Enter a valid number";
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
        <img src={images.image6} alt="" />
      </div>
      <form action="" className='formControl' onSubmit={handled}>
      <h1 className='register'>Register as <span> Customer</span></h1>
        <div className='inputFields'>

          <label htmlFor="name">Customer Name</label>
          <input type="text" value={formValues.name} onChange={handleChange} name='name'/>
          <span>{formErrors.name}</span>

          <label htmlFor="customerAddress">City</label>
          <input type="text" value={formValues.customerAddress} onChange={handleChange} name='customerAddress'/>
          <span>{formErrors.customerAaddress}</span>

          <label htmlFor="customerContact">Contact</label>
          <input type="number" value={formValues.customerContact} onChange={handleChange} name='customerContact'/>
          <span>{formErrors.customerContact}</span>

          <label htmlFor="email">Customer Email</label>
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

export default Customer