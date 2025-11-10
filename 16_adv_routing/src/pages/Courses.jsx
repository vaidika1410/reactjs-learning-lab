import React from 'react'
import { useNavigate } from 'react-router-dom'

const Courses = () => {

    const navigate = useNavigate()

    const homeBtn = () => {
        navigate('/')
    }

  return (
    <div className='h-[80%] w-full p-10 mt-5'>
      <h1 className='text-8xl underline'>Courses</h1>
      <button onClick={homeBtn} className='m-8 bg-red-400 p-6 rounded-2xl cursor-pointer text-2xl'>Return to Home Page</button>
      <button onClick={()=>{
        navigate(-1)
      }} className='m-8 bg-red-400 p-6 rounded-2xl cursor-pointer text-2xl'>Return to Previous Page</button>
    </div>
  )
}

export default Courses