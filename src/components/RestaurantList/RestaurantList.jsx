import React , { useState, useEffect} from 'react'
import Button from '../Button/Button'
import './RestaurantList.css'
import { useDispatch } from 'react-redux'
import { CustomerLogout } from '../../actions/index'
import axios from 'axios'
import {images} from '../../constants'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const RestaurantList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const customer = useSelector( (state) => state.CustomerReducer )

    const [restaurantList, setRestaurantList] = useState([])

        useEffect(() => {
            const fetchRestaurantList = async () => {
            const res = await axios.get("http://localhost:1234/restaurant/")
            setRestaurantList(res.data)
            }
            fetchRestaurantList()
        },[])


        const addrrest = restaurantList.filter(singleRest => {return singleRest.restaurantAddress === customer.customer.payload.customerAddress})
        // console.log(addrrest)
        

  return (<>
    <div className='food-logout-pos'><input href="/" type='button' onClick={() => dispatch(CustomerLogout()).then(window.location.replace('/'))} title="Logout" value="Logout" /></div>
    <div className="section">
        <div className='cart-block'> 
            <h1 style={{ wordSpacing:'5px', fontSize: '26px', letterSpacing:"0px" }}>Order from your fav <span style={{ color: "#FF0000"}}>Restaurant</span></h1>
            <div className='overflow p2 wide-size'>
            { addrrest.map((r) => (
                <div className='cart-product rest-block'>
                    <img src={images.image2} alt="" />
                    <div className='data rest-data'>
                        <h4>{r.restaurantName}</h4>
                    <p>{`Addr: ${r.restaurantAddress}`}</p>
                    <p>{`Call: ${r.restaurantContact}`}</p>
                    </div>
                    <input type="button" value="View foods" onClick={(e) => navigate(`/food/getbyrestaurantid/${r.id}`)}/>
                </div>
            ))}
        </div>
        </div>
    </div>
  </>)
}


export default RestaurantList