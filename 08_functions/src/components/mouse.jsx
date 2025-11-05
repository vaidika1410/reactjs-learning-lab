import React from 'react'

const mouse = () => {

    function mouseMove(dets){
        console.log(dets.clientX)
        console.log(dets.clientY)
    }

  return (
    <div className='mouse-div' onMouseMove={mouseMove}>
        hello
    </div>
  )
}

export default mouse