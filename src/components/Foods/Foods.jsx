import React, {useState, useEffect} from 'react'
import FoodItem from '../FoodItem/FoodItem'
import './Foods.css'
import axios from 'axios'
import {  useDispatch } from 'react-redux'
import { CustomerLogout, Logout } from '../../actions/index'
import { useSelector } from 'react-redux'
import Button from '../Button/Button'

const Foods = ({e}) => {

  console.log(e)
  const dispatch = useDispatch();
  const restaurant = useSelector( (state) => state.Reducer )

  const [foods, setFoods] = useState([])

        useEffect(() => {
            const fetchFoods = async () => {
            const res = await axios.get(`http://localhost:1234/food/getbyrestaurantid/${restaurant.restaurant.payload.id}`)
            setFoods(res.data)
            }
            fetchFoods()
        },[])

  return (<>
  <div className='food-logout-pos add-food'><Button href="restaurant/addmenu" value="Add Food" /></div>
  <div className='food-logout-pos'><input href="/" type='button' onClick={() => dispatch(Logout()).then(window.location.replace('/'))} title="Logout" value="Logout" /></div>
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