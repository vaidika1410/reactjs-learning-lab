import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div className='p-5 h-[90%]'>
       <div className='flex gap-10 align-center justify-center'>
          <Link className='text-2xl text-red-950 active:scale-95' to='/product/men'>Men's Products</Link>
          <Link className='text-2xl text-red-950 active:scale-95' to='/product/women'>Women's Products</Link>
       </div>
        <Outlet />
    </div>
  )
}

export default Product