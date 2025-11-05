import React from 'react'

const scrolling = () => {
    function containerScrolling(dets){
        console.log(dets.deltaY)
    }

  return (
    <div className='container' onWheel={containerScrolling}>
        <div className='sub-container'></div>
        <div className='sub-container'></div>
        <div className='sub-container'></div>
    </div>
  )
}

export default scrolling