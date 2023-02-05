import React from 'react'
import './Navbar.css'
import Busket from '../../img/shopping-cart.png'
import { useState } from 'react'

export default function  Navbar({setShow, size}) {
  return (
    <div className='nav'>
        <div className='menu' onClick={()=>setShow(true)}>
            <a href='#'>Home</a>
            <a href='#'>Products</a>
            <a href='#'>Sale</a>
        </div>
        <div className='busket' onClick={()=>setShow(false)}>
            <img src={Busket}/>
            <p className='busket_count'>{size}</p>
        </div>
    </div>
  )
}
