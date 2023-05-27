import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Loginbar from './components/Secendbar'

function App() {
  const [mode, setMode] = useState({
    background: "#F5FFFA",
    color: "#0F0F0F"
  })
  const modeData = {
    background: "#F5FFFA",
    color: "#0F0F0F"
    
  }
  
  const sendMode = () => {
    sendMode(modeData)
  }

  return (
      <div style={mode} className='App'>
        <Navbar mode={mode} sendMode={sendMode}/>
        <Loginbar/>
      </div>
  )
}

export default App
