import React from 'react'
import './Store.css'
import list from '../../data'
import Card from '../Card/Card'
import { useState } from 'react'

function Store({handleClick}) {
  return (
    <div className='store'>
        {list.map((item) => (
        <Card key={item.id} item={item}  handleClick={handleClick}/>
      ))}
    </div>
  )
}

export default Store