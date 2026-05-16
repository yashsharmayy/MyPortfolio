import React, { useContext, useEffect, useRef } from 'react'
import { hoverContext } from './Context'
import gsap from 'gsap'

const Card = ({ proname, content, Cardimg }) => {

    const { setprohover } = useContext(hoverContext)
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
        <div onMouseOver={() => setprohover(true)} onMouseLeave={() => setprohover(false)} >
            <div className="card md:absolute relative z-20  top-10 translate-y-4 rounded-3xl overflow-hidden shadow-2xl">

                <img className="w-full h-full object-cover" src={Cardimg} />

                <div className="hidden md:flex absolute top-10 bg-black/50 flex-col justify-end p-6">
                    <h2 className="text-3xl font-bold text-secondary ">{proname}</h2>
                    <p className="text-sm opacity-80">{content}</p>
                </div>

            </div>

            <div ref={headRef} className="md:hidden mb-6  relative mt-20">
                <h2 className="text-2xl font-bold">{proname}</h2>
                <p className="opacity-80">{content}</p>
            </div>
        </div>
    )
}

export default Card