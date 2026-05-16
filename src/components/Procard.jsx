import React from 'react'

const Procard = ({ link = "/", proimg, subname, name, discription }) => {
    return (
        <a
            href={link}
            target="_blank"
            className="group"
        >
            <div className="overflow-hidden rounded-4xl">
                <img
                    src={`/src/assets/${proimg}.png`}
                    alt={name}
                    className="w-full h-36 md:h-88 object-cover group-hover:scale-105 duration-500"
                />
            </div>

            <div className="mt-6">

                <span className="border border-lime-400 text-lime-400 px-5 py-2 rounded-full text-sm">
                    {subname}
                </span>

                <h1 className="text-4xl md:text-6xl font-heading uppercase mt-6 leading-none">
                    {name}
                </h1>

                <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                    {discription}
                </p>

            </div>
        </a>
    )
}

export default Procard