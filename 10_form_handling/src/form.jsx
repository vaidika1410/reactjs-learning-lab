import React from 'react'

const Form = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('form submitted')
    } 

  return (
    <div className='m-5'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
            <input className='bg-gray-700 rounded-xl p-4 border m-3 text-white' type="text" placeholder='enter your name' />
            <button className='bg-gray-700 rounded-xl p-4 border m-3 text-white' type="submit">submit</button>
        </form>
    </div>
  )
}

export default Form