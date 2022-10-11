import React from 'react'
import Button from '../Button/Button';

const Order = ({foodListCust}) => {

    
    
  return (
    <div className='order'>
            <h1>Order Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Bag Total</p>
                    <h4>{`Rs. }`}</h4>
                    
                </div>
                <div className='total'>
                    <p>Delivery</p>
                    <p>FREE</p>
                </div>
                <div className='total final'>
                    <p>Total Amount</p>
                    <h4>{`Rs. `}</h4>
                </div>
            </div>  
            <Button value="Pay Now" href="payment" />
        </div>
  )
}

export default Order