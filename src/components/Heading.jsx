import React from 'react'

const Heading = ({ head, para }) => {
    return (
        <div>
            <h1 className='font-heading text-5xl md:text-7xl '>
                {head}

            </h1>

            <p className=' md:text-lg lg:text-xl mt-4 md:w-125 lg:w-full '>
                {para}
            </p>
        </div>
    )
}

export default Heading