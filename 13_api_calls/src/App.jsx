import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData1 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data = await response.json()
    console.log(data)
  }

  const getData2 = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    console.log(response.data)
  }

  const getData3 = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')

    setData(response.data)
    console.log(data)
  }

  return (
    <div className='bg-blue-400 h-screen'>
      <button onClick={getData1} className='p-5 bg-white rounded m-10'>Fetch Data type-1</button>
      <button onClick={getData2} className='p-5 bg-white rounded m-10'>Fetch Data type-2</button>
      <button onClick={getData3} className='p-5 bg-white rounded m-10'>Fetch Data type-3</button>

      <div>
        {data.map((elem, idx) => {
          return <h2>{elem.author} {idx}</h2>
        })}
      </div>
    </div>
  )
}

export default App