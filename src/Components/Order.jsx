import React from 'react'
import { FaTrash } from 'react-icons/fa'
import './styles/Order.css';

const Order = (props) => {
  return (
    <div className='item_div_order'>
        <img src={'./img/' + props.item.img} alt="" />
        <h2>{props.item.title}</h2> 
        <p>{props.item.price}$</p>
        <FaTrash className='delete_order_order' onClick={() => props.toDelete(props.item.id)}/>
      </div>
  )
}

export default Order
