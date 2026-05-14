import React from 'react'
import heroimg from '../assets/heroimg.png'

const Heroimg = () => {
    return (

        <div className='heroprofile w-55 h-75  md:w-75 md:h-95 lg:w-85 lg:h-120 overflow-hidden rounded-3xl'>

            <img
                className=' w-full h-full  object-cover'
                src={heroimg} alt="profile"
            />
        </div>
    )
}

export default Heroimg