import React, { useState, useEffect} from 'react'
import './Payment.css'
import Button from '../Button/Button'
import { useLocation } from 'react-router'
import axios from 'axios'

const Payment = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const[payments, setPayments] = useState("")

    useEffect(() => {
        const fetchPayments = async () => {
        const res = await axios.get(`http://localhost:1234/payment/getpayment/${path}`)
        // console.log(res.data)
        setPayments(res.data)
        }
        fetchPayments()
    },[])

    console.log(payments);
    
  return (
    <>
        <div className='section'>
        <div className='cart-block payment'> 
            <h1>Payment <span style={{ color:'#FF0000' }}> {payments.paymentStatus}. </span> <br/> <br/><Button value="Buy More" href='restaurant/list'/> </h1>
            
        </div>
        <div className='order'>
            <h1>Payment Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Transaction ID</p>
                    <h4>{payments.transactionId}</h4>    
                </div>
                <br/>
                <div className='total'>
                    <p>Payment Status</p>
                    <p>{payments.paymentStatus}</p>
                </div>
                <div className='total'>
                    <p>Amount</p>
                    <p>{payments.amount}</p>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Payment