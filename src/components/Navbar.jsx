import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="warpar">
        <div className="logobar">
          <img src="./public/logo.png" className='logo' alt="Spotify" />
          <span className='logotext'>Spotify</span>
        </div>

      </div>
    </div>
  )
}
