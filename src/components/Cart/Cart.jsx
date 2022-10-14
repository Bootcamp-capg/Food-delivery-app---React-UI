import React, { useState, useEffect} from 'react'
import Button from '../Button/Button';
import './Cart.css'
import Order from '../Order/Order';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router'
import { images } from '../../constants'

const Cart = () => {

    const customer = useSelector((state) => state.CustomerReducer)

    const [foodListCust, setFoodListCust] = useState([])

    useEffect(() => {
        const fetchFoodList = async () => {
        const res = await axios.get(`http://localhost:1234/food/getbycustomerid/${customer.customer.payload.customerId}`)
        setFoodListCust(res.data)
        }
        fetchFoodList()
    },[])


    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const[orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
        const res = await axios.get(`http://localhost:1234/orders/getOrder/${path}`)
        // console.log(res.data)
        setOrders(res.data)
        }
        fetchOrders()
    },[])

    console.log(orders);


  return (
    <div className='section'>
        <div className='cart-block'> 
            <h1>Grab foods from <span style={{ color:"#FF0000"}}>Your Cart</span></h1>
            <div className='overflow p2'>
            { foodListCust.map((food) => (
                <div className='cart-product'>
                    <img src={images.image11} alt="" />
                    <div className='data'>
                        <h4>{food.foodName}</h4>
                        {/* <div style={{ display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <label htmlFor='number' style={{ fontSize: '14px', fontWeight:'500', marginRight:'5px'}}>Qty:</label>
                        <input style={{ width:'60px', marginTop:'5px'}} type="number" min={1}  step={1} placeholder={1} />
                        </div> */}
                    </div>
                    <p>{`Rs. ${food.foodPrice}`}</p>
                    <div></div>
                    {/* <Button value="Remove"/> */}
                </div>
            ))}
        </div>
        </div>
        <Order foodListCust={foodListCust}/>
    </div>
  )
}

export default Cart