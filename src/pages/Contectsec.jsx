import React, { useEffect, useRef } from 'react'
import Form from '../components/Form'
import gsap from 'gsap'

const Contectsec = () => {
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
        <div>
            <section ref={headRef} className="flex flex-col items-start my-8 p-10  md:px-20">
                <h1 className="font-heading text-5xl md:text-7xl">
                    Let's work together
                </h1>

                <p className="mt-4 max-w-2xl">
                    Let’s build something impactful together—whether it’s your brand, your website, or your next big idea.
                </p>
            </section>
            <Form />

        </div>
    )
}

export default Contectsec