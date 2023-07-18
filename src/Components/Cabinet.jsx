import React from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const Cabinet = () => {
  return (
    <div>
        <header>
            <span className='logo_header_header'>House Staff</span>
            <ul className='nav_header_header'>
            <Link to='/' className='linki'><li>Главная</li></Link>
            <Link to='/help' className='linki'><li>Поддержка</li></Link>
            <Link to='/contacts' className='linki'><li>Контакты</li></Link>
            <Link to='/cabinet' className='maini'><li>Кабинет</li></Link>
            </ul>
        </header>
        <h2>It's Your Personal Cabinet</h2>
        <Footer/>
    </div>
  )
}

export default Cabinet
