import React, { useEffect, useState } from 'react'
import Icons from '../../components/Icons'
import Button from '../../components/Button'
import Heroimg from '../../components/Heroimg'
import Aboutsec from '../Aboutsecc'
import Skillset from '../Skillset'
import Footer from '../Footer'
import Creation from '../../components/Creation'

const About = () => {

    return (
        <div>

            <div className='flex mt-30 md:mt-20 md:flex-row flex-col-reverse items-center justify-evenly'>
                <Aboutsec w={"full"} hide={"hidden"} />
                <div className='lg:w-1/2 flex '>
                    <Heroimg />
                </div>
            </div>
            <div>
                <Skillset />
            </div>
            <div>
                <Creation />
            </div>
            <Footer />
        </div>

    )
}

export default About