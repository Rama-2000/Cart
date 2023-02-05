import React, { useState } from 'react'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Store from './components/Store/Store'

export default function App() {
  const [show, setShow] = useState(true);
  const [busket, setBusket] = useState([])
  
  function handleClick(item){
    setBusket([...busket, item])
    console.log(busket)
  }
  
  return (
    <div className='app'>
      <Navbar setShow={setShow} size={busket.length}/>
      {show ? <Store handleClick={handleClick}/> : <Cart busket={busket} setBusket={setBusket}/>}
    </div>
  )
}
