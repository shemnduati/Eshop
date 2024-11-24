import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
    </div>
  )
}

export default App
