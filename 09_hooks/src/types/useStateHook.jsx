import React from 'react'
import { useState } from 'react'

const useStateHook = () => {
  
  const [num, setNum] = useState(0)

  function increase(){
    setNum(num + 1)
  }
  function decrease(){
    setNum(num - 1)
  }

  return (
    <div className='p-5 bg-gray-900 h-screen w-full'>
        <div className="num p-10 bg-gray-400 w-2xs rounded-3xl text-center text-4xl m-3">{num}</div>
        <button onClick={increase} className="num p-5 bg-gray-200 w-2xs rounded-3xl text-center text-4xl m-3" >Increase</button>
        <button onClick={decrease} className="num p-5 bg-gray-200 w-2xs rounded-3xl text-center text-4xl m-3">Decrease</button>
    </div>
  )
}

export default useStateHook