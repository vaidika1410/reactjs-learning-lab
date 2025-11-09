import React from 'react'

const card = (props) => {
    return (
        <a href={props.elem.url}>
            <div
                className='h-70 w-90 text-center'>
                <img
                    className='h-4/5 w-full object-cover '
                    src={props.elem.download_url} alt="" />
                <h1>{props.elem.author}</h1>
            </div>
        </a>
    )
}

export default card