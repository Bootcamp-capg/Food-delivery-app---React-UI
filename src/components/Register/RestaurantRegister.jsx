import React, { useState } from 'react'
import './Register.css'
import { images } from '../../constants'
import axios from 'axios'

const Register = () => {

  const [restaurantName, setName] = useState("");
  const [restaurantAddress, setAddress] = useState("");
  const [restaurantContact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handled = async (e) => {
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post("http://localhost:1234/restaurant/add/dto", {
        restaurantName,
        restaurantAddress,
        restaurantContact,
        email,
        password
      })
      res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }  
  }


  return (
    <div className='section reg'>  
      <div className='regImg'>
        <img src={images.image5} alt="" />
      </div>
      <form action="" className='formControl' onSubmit={handled}>
      <h1 className='register'>Register as <span>Restaurant</span></h1>
        <div className='inputFields'>
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="address">Address</label>
          <input type="text" onChange={(e) => setAddress(e.target.value)}/>
          <label htmlFor="contact">Contact</label>
          <input type="number" onChange={(e) => setContact(e.target.value)}/>
          <label htmlFor="email">Email ID</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input value='Register'  type='submit' />
        { error && console.log(error) }
      </form>
    </div>
  )
}

export default Register