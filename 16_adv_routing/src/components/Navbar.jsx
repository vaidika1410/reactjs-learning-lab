import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5 bg-red-300 text-2xl'>
        <div className="logo">
            <a href="/">EXIA</a>
        </div>
        <div className='flex gap-8 underline cursor-pointer'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar