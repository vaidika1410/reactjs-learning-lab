import React, { createElement, useState } from 'react'

const form = () => {

    const [title, setTitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setTitle('')
    }

  return (
    <div className='m-5'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
            <input 
            value = {title}
            onChange={(e) => {
                console.log(e.target.value)
                setTitle(e.target.value)
            }}
            className='bg-gray-700 rounded-xl p-4 border m-3 text-white' type="text" placeholder='enter your name' />
            <button className='bg-gray-700 rounded-xl p-4 border m-3 text-white' type="submit" >submit</button>
        </form>
    </div>
  )
}

export default form