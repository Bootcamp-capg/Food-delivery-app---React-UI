import React , { useState } from 'react'
import './Register.css'
import { images } from '../../constants'
import axios from 'axios'

const Customer = () => {

  const [name, setName] = useState("");
  const [customerAddress, setAddress] = useState("");
  const [customerContact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handled = async (e) => {
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post("http://localhost:1234/customer/add/dto", {
        name,
        customerAddress,
        customerContact,
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
        <img src={images.image6} alt="" />
      </div>
      <form action="" className='formControl' onSubmit={handled}>
      <h1 className='register'>Register as <span> Customer</span></h1>
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
          <input value='Register' className='alink' type='submit' style={{color:'black'}}/>
        { error && console.log(error) }
      </form>
    </div>
  )
}

export default Customer