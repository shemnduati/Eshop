import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
    </div>
  )
}

export default App
