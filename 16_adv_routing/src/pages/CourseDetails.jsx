import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CourseDetails = () => {

    const navigate = useNavigate()
    const params = useParams()

    const homeBtn = () => {
        navigate('/')
    }

    
  return (
    <div className='h-[80%] w-full p-10 mt-5'>
      <h1 className='text-8xl underline'>{params.id} Course Details</h1>
      <button onClick={homeBtn} className='m-8 bg-red-400 p-6 rounded-2xl cursor-pointer text-2xl'>Return to Home Page</button>
    </div>
  )
}

export default CourseDetails