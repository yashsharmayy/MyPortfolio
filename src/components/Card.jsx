import React, { useContext } from 'react'
import { hoverContext } from './Context'

const Card = ({ proname, content, img }) => {

    const { setprohover } = useContext(hoverContext)

    return (
        <div onMouseOver={() => setprohover(true)} onMouseLeave={() => setprohover(false)} >
            <div className="card md:absolute relative z-20  top-10 translate-y-4 rounded-3xl overflow-hidden shadow-2xl">

                <img className="w-full h-full object-cover" src={img} />

                <div className="hidden md:flex absolute top-10 bg-black/50 flex-col justify-end p-6">
                    <h2 className="text-3xl font-bold text-secondary ">{proname}</h2>
                    <p className="text-sm opacity-80">{content}</p>
                </div>

            </div>

            <div className="md:hidden mb-6  relative mt-20">
                <h2 className="text-2xl font-bold">{proname}</h2>
                <p className="opacity-80">{content}</p>
            </div>
        </div>
    )
}

export default Card