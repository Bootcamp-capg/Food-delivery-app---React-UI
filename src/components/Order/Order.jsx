import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import Button from '../Button/Button';
import axios from 'axios';

const Order = () => {

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
    <div className='order'>
        <h1>Order Details</h1>
        <div className='allTotal'>
            <div className='total'>
                <p>Order ID</p>
                <h4>txn23486487</h4>    
            </div>
            <div className='total'>
                <p>Total Price</p>
                <p>879</p>
            </div>
            <div className='total'>
                <p>Quantity</p>
                <p>02</p>
            </div>
            <div className='total'>
                <p>Payment Mode</p>
                <p>Online</p>
            </div>
            <div className='total final'>
                <p>Name</p>
                <h4>John Doe</h4>
            </div>
        </div>
</div>
  )
}

export default Order



//Orderid
//customer name
//total price
//total qty