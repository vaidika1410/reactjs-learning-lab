import React from 'react'
import { User } from 'lucide-react';
import { HouseHeart } from 'lucide-react';


const navbar = () => {
    return (
        <>
            <div className='w-full absolute pt-4 p-4 flex align-center justify-between'>
            <div className='flex gap-60'>
                <a href="app.jsx"><HouseHeart /></a>
                <ul className='flex gap-10'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Vilas</li>
                    <li className='cursor-pointer'>Manor</li>
                </ul>
            </div>
            <div className='flex'>
                <button className='px-12 h-9 rounded-full bg-white cursor-pointer'>Contact Us</button>
                <User className='bg-white p-2 rounded-full w-12 h-9 text cursor-pointer' />
            </div>
            </div>
        </>
    )
}

export default navbar