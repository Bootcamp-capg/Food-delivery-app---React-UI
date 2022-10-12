import React , { useState} from 'react'
import './AddMenu.css'
import { images } from '../../constants'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
import {  useDispatch } from 'react-redux'
import {  Logout } from '../../actions/index'

const AddMenu = () => {

  const restaurant = useSelector((state) => state.Reducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ name, setName] = useState("")
  const [ price, setPrice] = useState("")
  const [error, setError] = useState(false);

  const addFood = async (e) => {
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post("http://localhost:1234/food/add/dto", {
        foodName: name,
        foodPrice: price
      })

      const res1 = await axios.put(`http://localhost:1234/food/${res.data.foodId}/addresturant/${restaurant.restaurant.payload.id}`, {
        foodId: res.data.foodId,
        id: restaurant.restaurant.payload.id
      })

      res1.data && window.location.replace(`/food/getbyrestaurantid/${restaurant.restaurant.payload.id}`) 
    }
    catch(err){
      setError(true);
    } 
  }

  return (
    <>
         <div className='registerOpt-container'>
            <h1 className='join log-rest'>Add tasty food to the <span> menu </span> ... </h1>
            <form action="" className='login-formControl' onSubmit={addFood}>
                <div className='login-inputFields'>
                    <label htmlFor="">Food Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="">Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <input type="submit" value='Add' />
                { error && console.log(error) }
            </form>
        </div>
        <div className='food-logout-pos add-food'><input type="button" onClick={() => navigate(`/restaurant/foodList/${restaurant.restaurant.payload.id}`)} value=" Food Menu" /></div>
        <div className='food-logout-pos'><input href="/" type='button' onClick={() => dispatch(Logout()).then(window.location.replace('/'))} title="Logout" value="Logout" /></div>
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