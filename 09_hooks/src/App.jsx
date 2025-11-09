import React from 'react'
import UseState from './types/useStateHook.jsx'
import AdvUseState from './types/advUseStateHook.jsx'
import UseEffect from './types/useEffectHook.jsx'

const App = () => {
  return (
    <div>
      {/* <UseState /> */}
      <AdvUseState />
      <UseEffect />
    </div>
  )
}

export default App