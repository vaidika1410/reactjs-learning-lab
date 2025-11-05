import React from 'react'

const input = () => {
    const inputData = (dets) =>{
        console.log(dets.target.value)
    }

  return (
    <div>
        <input onChange={inputData} type="text" placeholder='enter a text' />
        
    </div>
  )
}

export default input