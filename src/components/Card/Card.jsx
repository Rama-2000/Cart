import React from 'react'
import './Card.css'

export default function Card({item, handleClick}) {
  const {name, img, title, price, btn } = item;
  return (
    <div>
      <div className='card'>
        <h1>{name}</h1>
        <img src={img}  alt='img'/>
        <div className='product_info'>
            <p className='title'>{title}</p>
            <p className='price'>{price}</p>
        </div>
        <button onClick={()=>handleClick(item)} className='btn'>Buy</button>
      </div>
    </div>
  )
}
