import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Heading = ({ head, para }) => {
    const headRef = useRef()
    useEffect(() => {
        gsap.from(headRef.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: headRef.current,
                start: "top 50%"
            }
        })
    }, [])
    return (
        <div ref={headRef}>
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