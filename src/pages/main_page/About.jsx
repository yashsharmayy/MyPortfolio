import React, { useEffect, useState } from 'react'
import Icons from '../../components/Icons'
import Button from '../../components/Button'
import Heroimg from '../../components/Heroimg'
import Aboutsec from '../Aboutsecc'

const About = () => {



    return (

        <div className='flex mt-30 md:mt-20 md:flex-row flex-col-reverse items-center justify-evenly'>
            <Aboutsec w={"full"} />
            <div className='lg:w-1/2 flex '>
                <Heroimg />
            </div>
        </div>
    )
}

export default About