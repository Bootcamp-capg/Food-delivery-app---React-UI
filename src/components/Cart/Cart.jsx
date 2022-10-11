import React, { useState, useEffect} from 'react'
import Button from '../Button/Button';
import './Cart.css'
import Order from '../Order/Order';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router'

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
            <h1>Your Cart</h1>
            <div className='overflow p2'>
            { foodListCust.map((p) => (
                <div className='cart-product'>
                    <img src={p.photo} alt="" />
                    <div className='data'>
                        <h4>{p.foodName}</h4>
                        {/* <div style={{ display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <label htmlFor='number' style={{ fontSize: '14px', fontWeight:'500', marginRight:'5px'}}>Qty:</label>
                        <input style={{ width:'60px', marginTop:'5px'}} type="number" min={1}  step={1} placeholder={1} />
                        </div> */}
                    </div>
                    <p>{`Rs. ${p.foodPrice}`}</p>
                    <Button value="Remove"/>
                </div>
            ))}
        </div>
        </div>
        <Order foodListCust={foodListCust}/>
    </div>
  )
}

export default Cart