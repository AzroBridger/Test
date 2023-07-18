import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import './styles/Header.css';
import { Link } from 'react-router-dom';

const showOrders = (props) => {
  let summ = 0
  props.orders.forEach(el => summ += +el.price)
  return (<div>
    {props.orders.map(el => (
    <Order toDelete = {props.toDelete} key={el.id} item={el}/>))}
    <p className='summ_header_header'>Сумма: {new Intl.NumberFormat().format(summ)}$</p>
  </div>)
}

const showNothing = () => {
  return(<div className='empty_const_header'>
    <h2>На данный момент ваша корзина пуста!</h2>
  </div>)
}

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo_header_header'>House Staff</span>
            <ul className='nav_header_header'>
            <Link to='/' className='maini'><li>Главная</li></Link>
            <Link to='/help' className='linki'><li>Поддержка</li></Link>
            <Link to='/contacts' className='linki'><li>Контакты</li></Link>
            <Link to='/cabinet' className='linki'><li>Кабинет</li></Link>
            </ul>
            
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopcart_button_header ${cartOpen && 'active'}`}/>
            <div className='loli'>
              <input type="search" placeholder='Искать здесь' />
              <button onClick={props.toSearch}></button>
            </div>
            {cartOpen && (
              <div className='cartopen_div_header'>
                {props.orders.length > 0 ? 
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        
    </header>
  )
}

export default Header
