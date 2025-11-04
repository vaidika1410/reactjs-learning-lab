import React from 'react'

const bottom = () => {
    const location = "Vancouver, Canada";
    const tag = "Popular";
    return (
        <div className='h-3/5 overflow-hidden mt-5 relative'>
            <img className='h-full w-full object-cover rounded-3xl' src="https://plus.unsplash.com/premium_photo-1736194027564-74e1a686babd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
            <div className="location-btn absolute z-10 top-3 left-3 p-2 bg-white rounded-full">{location}</div>
            <div className="rating absolute z-10 bottom-3 left-3 py-1.5 px-5 border-zinc-50 border-1 rounded-full text-white">
                <p>{tag}</p>
            </div>
        </div>
    )
}

export default bottom