import React, { useState } from 'react'
import './Register.css'
import { images } from '../../constants'
import axios from 'axios'

const Register = () => {

  // const [restaurantName, setName] = useState("");
  // const [restaurantAddress, setAddress] = useState("");
  // const [restaurantContact, setContact] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const handled = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // setError(false)
    // try{
    //   const res = await axios.post("http://localhost:1234/restaurant/add/dto", {
    //     restaurantName,
    //     restaurantAddress,
    //     restaurantContact,
    //     email,
    //     password
    //   })
    //   res.data && window.location.replace("/login");
    // }catch(err){
    //   setError(true);
    // }  
  }

  const initalValues = { name: "" , address:"", contact:"", email:"", password: ""};
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

    if(!values.address) {
      errors.address = "City is required";
    } else if(values.address.length < 4 ) {
      errors.address = "City must be more than 3 characters";
    } else if(values.address.length > 10 ) {
      errors.address = "City cannot exceed more than 10 characters";
    }

    if(!values.contact) {
      errors.contact = "Contact is required";
    } else if(!regexContact.test(values.contact)) {
      errors.contact = "Enter a valid number";
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
          <input type="text" value={formValues.name} onChange={handleChange} name='name'/>
          <span>{formErrors.name}</span>
          <label htmlFor="address">City</label>
          <input type="text" value={formValues.address} onChange={handleChange} name='address'/>
          <span>{formErrors.address}</span>
          <label htmlFor="contact">Contact</label>
          <input type="number" value={formValues.contact} onChange={handleChange} name='contact'/>
          <span>{formErrors.contact}</span>
          <label htmlFor="email">Email ID</label>
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