import React, { useState } from 'react'
import Home from './Home'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div className='p-10'>
      <h1 className='text-3xl capitalize'>{theme} Theme</h1>
      <Home theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App