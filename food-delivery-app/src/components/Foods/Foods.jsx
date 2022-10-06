import React from 'react'
import FoodItem from '../FoodItem/FoodItem'
import './Foods.css'
import Button from '../Button/Button'

const Foods = ({foods}) => {
  return (<>
  <div className='food-logout-pos'><Button value="Logout" href=""/></div>
    <div className='section prdct'>
      
        <h1 className='heading'>Food Menu</h1>
        <div className='all-products p2'>
          { foods.map( (p) => 
            <FoodItem p={p}/>
        )}
        </div>
    </div>
  </>)
}

export default Foods