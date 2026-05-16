import React, { useEffect, useRef } from 'react'
import Survicesec from '../survicesec'
import Footer from '../Footer'
import Creation from '../../components/Creation'
import gsap from 'gsap'

const Service = () => {
    const headRef = useRef()
    useEffect(() => {
        gsap.from(headRef.current.children, {
            scale: 0,
            delay: 1.1,
            rotateY: 180,
            opacity: 0,
            duration: 0.8,

            scrollTrigger: {
                trigger: headRef.current,
                start: "top 50%"
            }
        })
    }, [])
    return (
        <div className='pt-20'>
            <div className='flex md:flex-row flex-col-reverse justify-evenly items-center'>

                <Survicesec w={"full"} />
                <div ref={headRef} className='heroprofile w-55 h-75  md:w-75 md:h-95 lg:w-85 lg:h-120 overflow-hidden rounded-3xl'>

                    <img
                        className='  w-full h-full  object-cover'
                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile"
                    />
                </div>
            </div>
            <Creation />
            <Footer />
        </div>
    )
}

export default Service