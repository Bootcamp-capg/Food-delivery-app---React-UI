import React from 'react'
import Button from '../Button/Button';

const Order = ({foods}) => {

    
    const totalP = (foods.map( p => p.price ).reduce( (pr, total) => { return total += pr},0));
  return (
    <div className='order'>
            <h1>Order Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Bag Total</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                    
                </div>
                <div className='total'>
                    <p>Delivery</p>
                    <p>FREE</p>
                </div>
                <div className='total final'>
                    <p>Total Amount</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                </div>
            </div>  
            <Button value="Pay Now" href="payment" />
        </div>
  )
}

export default Order