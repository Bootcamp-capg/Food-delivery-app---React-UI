import React , { useState, useEffect} from 'react'
import Button from '../Button/Button'
import './RestaurantList.css'
import { useDispatch } from 'react-redux'
import { Logout } from '../../actions/index'
import axios from 'axios'
import {images} from '../../constants'

const RestaurantList = () => {

    const dispatch = useDispatch();

    const [restaurantList, setRestaurantList] = useState([])

        useEffect(() => {
            const fetchRestaurantList = async () => {
            const res = await axios.get("http://localhost:1234/restaurant/")
            setRestaurantList(res.data)
            }
            fetchRestaurantList()
        },[])

  return (<>
    <div className='food-logout-pos'><input href="/" type='button' onClick={() => dispatch(Logout())} title="Logout" value="Logout" /></div>
    <div className="section">
        <div className='cart-block'> 
            <h1 style={{ wordSpacing:'5px', fontSize: '26px', letterSpacing:"0px" }}>Order from your fav <span style={{ color: "#FF0000"}}>Restaurant</span></h1>
            <div className='overflow p2 wide-size'>
            { restaurantList.map((r) => (
                <div className='cart-product rest-block'>
                    <img src={images.image2} alt="" />
                    <div className='data rest-data'>
                        <h4>{r.restaurantName}</h4>
                    <p>{`Call: ${r.restaurantContact}`}</p>
                    </div>
                    <Button value="View foods" href='foods'/>
                </div>
            ))}
        </div>
        </div>
    </div>
  </>)
}

export default RestaurantList