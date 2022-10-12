import React, { useState} from 'react'
import './FoodItem.css'
import axios from 'axios'
import {images} from '../../constants'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'

const RestFoodItem = ({f}) => {

  const location = useLocation();
  const path = location.pathname.split("/")[3];


  const [error, setError] = useState(false);
  const customer = useSelector((state) => state.CustomerReducer);
  // console.log(customer.customer.payload.customerId)

  const handleCart = async (e) => {
    e.preventDefault();
    setError(false)

    try{ 
      const res1 = await axios.put(`http://localhost:1234/food/${f.foodId}/addcustomer/${customer.customer.payload.customerId}`,{
        foodId : f.foodId,
        customerId: customer.customer.payload.customerId
      })

    }catch(err){
      setError(true)
    }
    
  }

  const handleDelete = async () => {
    try{
      await axios.delete(`http://localhost:1234/food/deletebyid/${f.foodId}`);
      window.location.replace("");
    }catch(err){
      console.log(err)
    }
  }

  const funCall = async () => {
    const res = await axios.put(`http://localhost:1234/customer/${customer.customer.payload.customerId}/addresturant/${path}`, {
        customerId : customer.customer.payload.customerId,
        restaurantId: path
      })

      const cart = await axios.post("http://localhost:1234/cart/add/dto", {
      })
      console.log(cart.data.id)

      const res2 = await axios.put(`http://localhost:1234/cart/${cart.data.id}/addcustomer/${customer.customer.payload.customerId}`, {
        id: cart.data.id,
        customerId: customer.customer.payload.customerId
      })

      const orderRes = await axios.post("http://localhost:1234/orders/add/dto",{});
      
      const res3 = await axios.put(`http://localhost:1234/orders/${cart.data.id}/addcart/${orderRes.data.id}`,{
        cartId:cart.data.id,
        id:orderRes.data.id
      });

      res3.data && window.location.replace(`/orders/${orderRes.data.id}`)
  }

  return (<>
    {/* <div className='food-logout-pos add-food'><input type="button" value="Go to Cart" onClick={funCall}/></div> */}
    <div className='product '>
      <div className='product-image'>
        <img src={images.image11} alt="" />
      </div>
      <h6>{f.foodName}</h6>
      <h3>{`Rs. ${f.foodPrice}`}</h3>
      { customer ? 
      <input type="button" value="Add to Cart"  onClick={handleCart} /> : 
      <input type="button" style={{ marginTop: "20px"}} value="Delete" onClick={handleDelete}/> }
    </div>
  </>)
}

export default RestFoodItem