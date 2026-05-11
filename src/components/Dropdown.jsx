import React, { useContext, useState } from 'react'
import { hoverContext } from './Contexthover'

const Dropdown = ({ heading, idx, content1, content2, content3, content4 }) => {
    const { setActive } = useContext(hoverContext)
    const [open, setOpen] = useState(false)


    return (
        <div onMouseOver={() => setActive(idx)} onMouseLeave={() => setActive(0)} className="text-white max-w-xl ">

            <div className="border-b border-gray-600 py-4 cursor-pointer">

                <div
                    onClick={() => setOpen(!open)}
                    className="font-alt text-2xl hover:text-secondary mt-8 flex justify-between items-center"
                >
                    {idx}. {heading}

                    <span
                        className={`text-2xl transition-transform duration-300 ${open ? 'rotate-180' : ''
                            }`}
                    >
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </div>


                <div
                    className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <ul className="ml-2 text-gray-300 space-y-3">
                        <li className="flex items-center gap-3">
                            <i className="fa-regular fa-circle-check text-secondary"></i>
                            {content1}
                        </li>

                        <li className="flex items-center gap-3">
                            <i className="fa-regular fa-circle-check text-secondary"></i>
                            {content2}
                        </li>

                        <li className="flex items-center gap-3">
                            <i className="fa-regular fa-circle-check text-secondary"></i>
                            {content3}
                        </li>

                        <li className="flex items-center gap-3">
                            <i className="fa-regular fa-circle-check text-secondary"></i>
                            {content4}
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Dropdown