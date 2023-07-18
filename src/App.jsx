import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Help from './Components/Help';
import Contacts from './Components/Contacts';
import Cabinet from './Components/Cabinet';



const App = () => {
  
  
  return (
    <div className='wrapper'>
      <Routes>
        <Route path = '*' element = {<Main/>}/>
        <Route path="/help" element={<Help />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cabinet" element={<Cabinet />} />
      </Routes>
    </div>
  )
  
}


export default App
