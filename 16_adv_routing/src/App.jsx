import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFound from './pages/NotFound.jsx'

const App = () => {
  return (
    <div className='h-screen bg-red-200 '>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route> 
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App