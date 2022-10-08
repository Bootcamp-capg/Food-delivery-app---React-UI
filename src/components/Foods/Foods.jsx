import React, {useState, useEffect} from 'react'
import FoodItem from '../FoodItem/FoodItem'
import './Foods.css'
import axios from 'axios'
import {  useDispatch } from 'react-redux'
import { Logout } from '../../actions/index'

const Foods = () => {
  const dispatch = useDispatch();
  

  const [foods, setFoods] = useState([])

        useEffect(() => {
            const fetchFoods = async () => {
            const res = await axios.get("http://localhost:1234/food/")
            setFoods(res.data)
            }
            fetchFoods()
        })

  

  return (<>
  <div className='food-logout-pos'><input href="/" type='button' onClick={() => dispatch(Logout())} title="Logout" value="Logout" /></div>
    <div className='section prdct'>
      
        <h1 className='heading'>Grab the best of <span style={{ color: "#FF0000"}}>Restaurant</span></h1>
        <div className='all-products p2'>
          { foods.map( (f) => 
            <FoodItem f={f}/>
        )}
        </div>
    </div>
  </>)
}

export default Foods