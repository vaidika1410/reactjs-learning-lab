import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card.jsx'

const App = () => {

  const [userData, setData] = useState('')
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)

    console.log('data is loaded...')
    setData(response.data)
    console.log(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h1 className='text-gray-400 capitalize absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1>

  if (userData) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} /> 
      </div>
    })
  }

  return (
    <div className='bg-black min-h-screen text-white p-5 text-2xl font-bold relative'>
      <div className='flex flex-wrap align-center justify-center gap-4 pt-8 h-[80%] bg-transparent'>
        {printUserData}
      </div>
      <div
            className='flex align-center justify-center gap-5 absolute bottom-8 left-1/2 -translate-x-1/2'
        >
            <button 
            style={{opacity : index == 1 ? 0.5 : 1}}
            onClick={() => {
                if (index > 1) {
                    setIndex(index - 1)
                    setData([])
                }
            }} className='p-4 px-8 rounded bg-blue-400 cursor-pointer active:scale-95'>
                Prev
            </button>
            <h1 className='mt-3.5'>
                Page {index}
            </h1>
            <button onClick={() => {
                setData([])
                setIndex(index + 1)
            }} className='p-4 px-8 rounded bg-blue-400 cursor-pointer active:scale-95'>
                Next
            </button>
        </div>
    </div>
  )
}

export default App