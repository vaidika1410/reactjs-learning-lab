import React, { useEffect, useState } from 'react'

const useEffectHook = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(10)

    useEffect(function(){
        console.log('use effect is running')
    }, [a, b])

    return (
        <div className='m-5 text-3xl'>
            <h1>{a}</h1>
            <button className='p-10 bg-red-400 rounded-2xl m-5' onClick={() => {
                setA(a + 1)
            }}>Change A</button>
            <h1>{b}</h1>
            <button className='p-10 bg-blue-400 rounded-2xl m-5' onClick={() => {
                setB(b + 1)
            }}>Change B</button>
        </div>
    )
}

export default useEffectHook