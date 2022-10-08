import React from 'react'
import './FoodItem.css'
import Button from '../Button/Button'

import {images} from '../../constants'

const FoodItem = ({f}) => {
  return (
    <div className='product '>
      <div className='product-image'>
        <img src={images.image} alt="" />
      </div>
      <h6>{f.foodName}</h6>
      <h3>{`Rs. ${f.foodPrice}`}</h3>
      <Button value="Add to Cart" href='cart'/>
    </div>
  )
}

export default FoodItem