import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Activities from './components/Activities'
import StayInTouch from './components/StayInTouch'

function App() {

  return (
    <div>
      <Header />
      <Intro />
      <Activities />
      <StayInTouch />
    </div>
  )
}

export default App
