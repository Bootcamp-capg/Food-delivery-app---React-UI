import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>  
      <div className='logo-pos'>
        <Link className='logo' to='/'>Just<span className='logo logo-food'>Food</span></Link>
      </div>
    </>
  )
}

export default Logo