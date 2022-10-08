import React from 'react'
import './Payment.css'
import Button from '../Button/Button'

const Payment = () => {
  return (
    <>
        <div className='section'>
        <div className='cart-block payment'> 
            <h1>Your Payment has been made <span style={{ color:'#00C04D'}}>successfully.</span> <br/> <br/><Button value="Buy More" href='foods'/> </h1>
            
        </div>
        <div className='order'>
            <h1>Payment Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Transaction ID</p>
                    <h4>txn23486487</h4>    
                </div>
                <div className='total'>
                    <p>Order ID</p>
                    <p>ord73746374</p>
                </div>
                <div className='total'>
                    <p>Date</p>
                    <p>06-10-2022</p>
                </div>
                <div className='total'>
                    <p>Payment Mode</p>
                    <p>Credit Card</p>
                </div>
                <div className='total final'>
                    <p>Name</p>
                    <h4>John Doe</h4>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Payment