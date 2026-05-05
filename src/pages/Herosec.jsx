import React from 'react'
import heroimg from '../assets/heroimg1.png'

const Herosec = () => {

    return (
        <div className='relative w-full mt-25 overflow-x-hidden flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-20 h-auto lg:h-[88vh]'>

            <div className='w-full lg:mb-30 text-center md:text-left md:mb-10 '>
                <h2 className='font-heading text-2xl md:text-4xl'>Yash Sharma</h2>
                <h1 className='font-heading text-5xl md:text-7xl lg:text-9xl'>
                    Frontend
                </h1>
            </div>

            <div className='relative my-10 lg:my-0'>

                <div className='absolute z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary text-bg-default flex items-center justify-center text-xl md:text-2xl -left-6 -bottom-6'>
                    Hi
                </div>

                <div className='w-55 h-75  md:w-90 md:h-125 overflow-hidden rounded-3xl'>
                    <img
                        className='w-full h-full object-cover'
                        src={heroimg} alt="profile"
                    />
                </div>

            </div>

            <div className='w-full text-center md:text-right'>
                <h1 className='font-heading text-5xl md:text-7xl lg:text-9xl'>
                    Developer
                </h1>
                <p className=' md:text-lg lg:text-xl mt-4 max-w-md ml-auto'>
                    Digital designer & React developer building modern web interfaces.
                </p>
            </div>


        </div>
    )
}

export default Herosec