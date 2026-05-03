import React from 'react'
import Dropdown from '../components/Dropdown'

const Survicesec = () => {
    return (
        <div className=' lg:h-screen flex p-10 items-center'>
            <div className='lg:w-1/2 p-0 '>
                <h1 className='font-heading text-5xl md:text-7xl '>
                    what I can do for you

                </h1>

                <p className=' md:text-lg lg:text-xl mt-4  '>
                    I develop responsive websites and manage website hosting to ensure smooth performance.
                </p>
                <Dropdown head={"UI/UX DESIGN"} />
                <Dropdown head={"UI/UX DESIGN"} />
                <Dropdown head={"UI/UX DESIGN"} />
                <Dropdown head={"UI/UX DESIGN"} />
            </div>
            <div className='lg:w-1/2'></div>
        </div>
    )
}

export default Survicesec