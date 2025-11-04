import { ChevronDown } from 'lucide-react';

const bottomButtons = () => {
    return (
        <div className="buttons absolute bottom-5 flex align-center justify-center m-3 ml-70 gap-3">
            <button className='p-2 px-8 bg-white rounded-full flex align-center justify-center cursor-pointer'>Select Type <ChevronDown /></button>
            <button className='p-2 px-8 bg-white rounded-full flex align-center justify-center cursor-pointer'>Location <ChevronDown /></button>
            <button className='p-2 px-8 border border-white rounded-full text-white flex align-center justify-center cursor-pointer'>Search</button>
        </div>

    )
}

export default bottomButtons