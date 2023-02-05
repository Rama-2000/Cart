import React from 'react'

export default function Cart({busket}) {
  return (
    <div>
        {busket.map((item)=>(
          <div className='card'>
          <h1>{item.name}</h1>
          <img src={item.img}  alt='img'/>
          <div className='product_info'>
              <p className='title'>{item.title}</p>
              <p className='price'>{item.price}</p>
          </div>
        </div>
        ))}
        
    </div>
  )
}
