import React from 'react'
import './styles/Fullitem.css';
import { FaWindowClose } from "react-icons/fa";

const FullItem = (props) => {
  return (
    <div className='full_item_fullItem'>
        <div className=''>
            <FaWindowClose className='close_button_fullitem' onClick={() => props.toShow(props.item)}/>
            <img src={'./img/' + props.item.img} alt=""  />
            <h2>{props.item.title}</h2> 
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div className='add_item_item' onClick={() => props.toAdd(props.item)}>+</div>  
        </div>
      </div>
  )
}

export default FullItem
