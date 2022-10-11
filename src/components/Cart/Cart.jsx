import React from 'react'
import Button from '../Button/Button';
import './Cart.css'
import Order from '../Order/Order';

const Cart = ({foods}) => {

  return (
    <div className='section'>
        <div className='cart-block'> 
            <h1>Your Cart</h1>
            <div className='overflow p2'>
            { foods.map((p) => (
                <div className='cart-product'>
                    <img src={p.photo} alt="" />
                    <div className='data'>
                        <h4>{p.title}</h4>
                        {/* <div style={{ display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <label htmlFor='number' style={{ fontSize: '14px', fontWeight:'500', marginRight:'5px'}}>Qty:</label>
                        <input style={{ width:'60px', marginTop:'5px'}} type="number" min={1}  step={1} placeholder={1} />
                        </div> */}
                    </div>
                    <p>{`Rs. ${p.price}`}</p>
                    <Button value="Remove"/>
                </div>
            ))}
        </div>
        </div>
        <Order foods={foods}/>
    </div>
  )
}

export default Cart