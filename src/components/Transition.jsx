import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import { hoverContext } from './Context'

const Transition = () => {
    const { pagechange, setpagechange } = useContext(hoverContext)
    const Row1ref = useRef()
    const Row2ref = useRef()





    const openAnimation = () => {

        gsap.set(".transitonContainer", {
            display: "flex",
            opacity: 1
        })

        gsap.set(Row1ref.current.children, {
            y: 0
        })

        gsap.set(Row2ref.current.children, {
            y: 0
        })

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(".transitonContainer", {
                    display: "none"
                })
            }
        })

        tl.to(Row1ref.current.children, {
            y: 1000,
            stagger: -0.2,
            duration: 1,
            ease: "power3.inOut"
        })

            .to(Row2ref.current.children, {
                y: -1000,
                stagger: 0.2,
                duration: 1,
                ease: "power3.inOut"
            }, "<")
    }
    const pageTransition = () => {

        gsap.set(".transitonContainer", {
            display: "flex",
            opacity: 1
        })

        gsap.set(Row1ref.current.children, {
            y: -1000
        })

        gsap.set(Row2ref.current.children, {
            y: 1000
        })

        const tl = gsap.timeline({
            onComplete: () => {

                openAnimation()

                setpagechange(false)
            }
        })

        tl.to(Row1ref.current.children, {
            y: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.inOut"
        })

            .to(Row2ref.current.children, {
                y: 0,
                stagger: -0.2,
                duration: 0.6,
                ease: "power3.inOut"
            }, "<")
    }
    useEffect(() => {

        openAnimation()

    }, [])
    useEffect(() => {

        if (pagechange) {
            pageTransition()
        }

    }, [pagechange])
    return (



        <div className='overflow-hidden'>

            <div className='transitonContainer fixed w-full top-0 left-0  h-screen flex z-60 '>
                <div ref={Row1ref} className="transiton row1">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
                <div ref={Row2ref} className="transiton row2">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </div>
        </div>
    )
}

export default Transition