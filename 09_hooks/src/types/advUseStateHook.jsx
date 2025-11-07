import React, { useState } from 'react'

const advUseStateHook = () => {
    const [data, setdata] = useState({name:'Vaidika', age:22, profession:'Developer'})

    const changeData = () => {
        // const newData = {...data}

        // newData.name = 'Gautam'
        // newData.age = 21
        // newData.profession = 'Designer'

        const newData = (prev => ({...prev, name:'Gautam', age:21} ))

        setdata(newData)
    }



  return (
    <>
        <h1 className='text-4xl p-4'>{data.name} , {data.age}</h1>
        <button onClick={changeData} className='p-5 rounded-full bg-emerald-700 m-4'>Change data</button>
    </>
  )
}

export default advUseStateHook