import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import Button from '../Button/Button';
import axios from 'axios';

const Order = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const[orders, setOrders] = useState("")

    useEffect(() => {
        const fetchOrders = async () => {
        const res = await axios.get(`http://localhost:1234/orders/getOrder/${path}`)
        // console.log(res.data)
        setOrders(res.data)
        }
        fetchOrders()
    },[])

    console.log(orders);


    const makePayment = async () => {
        const pay = await axios.post(`http://localhost:1234/payment/add/dto`, {}) 
        console.log(pay.data)

        const payres = await axios.put(`http://localhost:1234/payment/${orders.id}/addorders/${pay.data.paymentId}`, {
            orderId: orders.id,
            paymentId: pay.data.paymentId
        })

        payres.data && window.location.replace(`/getpayment/${pay.data.paymentId}`)
    }

    
    
  return (
    <div className='order'>
        
        <h1>Order Details</h1>
        <div className='allTotal'>
            <div className='total'>
                <p>Order ID</p>
                <h4>{orders.id}</h4>    
            </div>
            <div className='total'>
                <p>Total Price</p>
                <p>{orders.price}</p>
            </div>
            <div className='total'>
                <p>Quantity</p>
                <p>{orders.qty}</p>
            </div>
            <div className='total'>
                <p>Payment Mode</p>
                <p>Online</p>
            </div>
            <div className='total final'>
                <p>Name</p>
                <h4>{orders.name}</h4>
            </div> 
        </div> 
        <input type="button" value="Pay Now" onClick={makePayment} />
</div>
  )
}

export default Order



//Orderid
//customer name
//total price
//total qty