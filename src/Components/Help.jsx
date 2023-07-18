import React from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom'
import './styles/NavBar.css';


const Help = () => {
  return (
    <div className='width'>
        <header>
            <span className='logo_header_header'>House Staff</span>
            <ul className='nav_header_header'>
            <Link to='/' className='linki'><li>Главная</li></Link>
            <Link to='/help' className='maini'><li>Поддержка</li></Link>
            <Link to='/contacts' className='linki'><li>Контакты</li></Link>
            <Link to='/cabinet' className='linki'><li>Кабинет</li></Link>
            </ul>
          </header>
        <h2>It's Help Page</h2>
        <Footer/>
    </div>
    
  )
}

export default Help
