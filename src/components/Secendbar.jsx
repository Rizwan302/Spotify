import React from 'react'
import './Secendbar.scss'
import Loginbar from './Loginbar'
import Home from './Navbar/Home'

export default function Secendbar() {
  return (
    <div className='secend'>
      <Loginbar/>
      <Home/>
    </div>
  )
}

