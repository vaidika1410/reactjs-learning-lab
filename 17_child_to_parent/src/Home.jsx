import React from 'react'

const Home = (props) => {
  return (
    <div className='mt-10'>
        <button className='bg-emerald-700 text-white p-5 rounded cursor-pointer' onClick={() => {
            props.setTheme('dark')
        }}>Change Theme</button>
    </div>
  )
}

export default Home