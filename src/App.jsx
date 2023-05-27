import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Loginbar from './components/Secendbar'

function App() {
  // const [mode, set]

  return (
      <div className='App'>
        <Navbar />
        <Loginbar/>
      </div>
  )
}

export default App
