import React from 'react'
import Top from './top.jsx'
import Middle from './middle.jsx'
import Bottom from './bottom.jsx'

const section1 = (props) => {
  return (
    <>
    <div className='p-7 pb-5 h-screen w-1/3 flex flex-col'>
    <Top />
    <Middle data={props.data} />
    <Bottom />
    </div>
    </>
  )
}

export default section1