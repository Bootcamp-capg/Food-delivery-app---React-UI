import React from 'react'
import './AddMenu.css'

import Button from '../Button/Button'

import { images } from '../../constants'

const AddMenu = () => {
  return (
    <>
         <div className='registerOpt-container'>
            <h1 className='join log-rest'>Add tasty food to the <span> menu </span> ... </h1>
            <form action="" className='login-formControl'>
                <div className='login-inputFields'>
                    <label htmlFor="">Food Name</label>
                    <input type="text" />
                    <label htmlFor="">Price</label>
                    <input type="number" />
                </div>
                <Button value='Add' />
            </form>
        </div>
        <div >
            <div className='icons icon1' > <img  src={images.image7} alt="" />  </div> 
            <div className='icons icon2' > <img  src={images.image8} alt="" />  </div> 
            <div className='icons icon3' > <img  src={images.image9} alt="" />  </div> 
            <div className='icons icon4' > <img  src={images.image10} alt="" /> </div> 
        </div>
    </>
  )
}

export default AddMenu