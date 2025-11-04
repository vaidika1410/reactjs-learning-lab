import React from 'react'
import { ArrowUpRight  } from 'lucide-react';


const middle = () => {
  const capital = '115k'
  const happyCustomers = '70k'
  const options = '47k'

  return (
    <>
    <div className='flex justify-between'>
        <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, beatae.</p>
        <button className='p-3 w-1/3 bg-black rounded-full text-white flex justify-center gap-1 align-center cursor-pointer'>More <ArrowUpRight  /></button>
    </div>
    <div className='h-1/9 mt-6'>
        <ul className='flex justify-between text-4xl'>
          <li>
            {capital}+
            <p className='text-xs'>Capital Raised</p>
          </li>
          <li>
            {happyCustomers}+
            <p className='text-xs'>Happy Customers</p>
            </li>
          <li>
            {options}+
            <p className='text-xs'>Property Options</p>
            </li>
        </ul>
    </div>
    </>
  )
}

export default middle