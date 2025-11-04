import React from 'react'
import Bottom from './section2_bottom/bottom'

const section2 = () => {
  return (
    <div className='w-2/3 relative m-2'>
        <img className='h-full w-full object-cover object-center bg-blend-multiply' src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" />
        <div className="overlay bg-linear-to-t from-black to-70% to-black/0 absolute top-0 left-0 h-full w-full bg-blend-overlay"></div>
        <Bottom />
    </div>
  )
}

export default section2