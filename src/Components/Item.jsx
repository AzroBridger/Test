import React from 'react'

const Item = (props) => {
  return (
    <div className='item_item_all'>
        <img src={'./img/' + props.item.img} alt="" onClick={() => props.toShow(props.item)} />
        <h2>{props.item.title}</h2>
        <b>{props.item.price}$</b>
        <div className='add_item_item' onClick={() => props.toAdd(props.item)}>+</div>       
      </div>
  )
}

export default Item
