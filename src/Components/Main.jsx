import React, { useState } from 'react'
import Header from './Header';
import Items from './Items';
import Categories from './Categories';
import FullItem from './FullItem';
import Footer from './Footer';
import './styles/Main.css';



const App = () => {
  let [fullItem, setfullItem] = useState(false)
  let [orders, setOrders] = useState([])
  let [state, setState] = useState({
    fullItems : [],
    items: [
      {
        id: '1',
        title: 'Стул серый',
        img: 'chair-grey.jpg',
        desc: 'Wonderful product',
        category:'chairs',
        price:'49.99'
      },
      {
        id: '2',
        title: 'Кресло серое',
        img: 'armchair-grey.jpg',
        desc: 'Wonderful product',
        category:'chairs',
        price:'69.99'
      },
      {
        id: '3',
        title: 'Шкаф для кухни',
        img: 'kitchens wardrobe.jpg',
        desc: 'Wonderful product',
        category:'closets',
        price:'59.99'
      },
      {
        id: '4',
        title: 'Диван серый',
        img: 'grey sofa.jpg',
        desc: 'Wonderful product',
        category:'sofas',
        price:'499.99'
      }
    ],
    categories : [
      {
          key: 'all',
          name : 'Всё',

      },
      {
          key: 'chairs',
          name : 'Стулья',

      },
      {
          key: 'closets',
          name : 'Шкафы',

      },
      {
          key: 'sofas',
          name : 'Диваны',

      },
    ]})
  let [currentItems, setItems] = useState(state.items)
  let [walp, setWalp] = useState(true)
  
  const toShowItem = (item) => {
    setState((prev) => {
      let state = prev
      state.fullItems = (item)
      state.fullItem = (!state.fullItem)
      return state
      })
    setfullItem((prev) => {
      let fullItem = prev
      fullItem = (!fullItem)
      return fullItem
      })
  }

  const chooseCategory =(category) => {
    if (category === 'all'){
      setItems((prev) => {
        let currentItems = prev
        currentItems = state.items
        return currentItems
        })
      return}                                                    
       setItems((prev) => {
         let currentItems = prev
         currentItems = state.items.filter(el => el.category === category)
         return currentItems
         })
     }

  const deleteOrder = (id) => {
    setOrders((prev) => {
      let orders = prev
      orders = (orders.filter(el => el.id !== id))
      return orders
      })
    }

  const addToOrder = (item) => {
    let array = false
    orders.forEach(el => {
      if(el.id === item.id)
      {array = true}})

    if (array === false){
      setOrders((prev) => {
        let orders = prev
        orders =  [...orders, item]
        return orders})}
  }

  const search = () => {
    // setWalp((prev) => {
    //   let walp = prev
    //   walp = !walp
    //   return walp
    // })
    
  }

  
  
  return (
    <div className='wrapper'>
      <Header orders={orders} key = {orders.id} toDelete = {deleteOrder} toSearch = {search}/>
      {walp && <div className='presentation_header_header'></div>}
      {walp && <Categories categories = {state.categories} chooseCategory = {chooseCategory}/>}
      {walp === false ? <h3 className='walpaper'>Результаты Поиска:</h3>: null} 
      <Items items = {currentItems} toAdd = {addToOrder} toShow = {toShowItem}/>
      {fullItem && <FullItem toAdd = {addToOrder} toShow = {toShowItem} item = {state.fullItems}/>}
      <Footer/>
    </div>
  )
  
  }


export default App
