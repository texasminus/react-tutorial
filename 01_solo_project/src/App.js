import React, { StrictMode } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'

export default function App(){
  return (
    <div className='main'>
      <StrictMode>
        <img className="photo" src='/img/midoriya.jpeg' />
        <div className='main--content'>
          <Info />
          <About />
          <Interests />
        </div>
        <Footer />
      </StrictMode>
    </div>
  )
}