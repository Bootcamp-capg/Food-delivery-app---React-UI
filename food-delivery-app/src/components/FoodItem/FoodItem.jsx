import React from 'react'
import './FoodItem.css'
import Button from '../Button/Button'

const FoodItem = ({p}) => {
  return (
    <div className='product '>
      <div className='product-image'>
        <img src={p.photo} alt="" />
      </div>
      <h6>{p.title}</h6>
      <h3>{`Rs. ${p.price}`}</h3>
      <Button value="Add to Cart" href='cart'/>
    </div>
  )
}

export default FoodItem