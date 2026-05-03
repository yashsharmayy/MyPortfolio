import React from 'react'

const Dropdown = () => {
    return (
        <div className="text-white max-w-xl mx-auto">

            <details className="border-b border-gray-600 py-4 cursor-pointer group">
                <summary className="transition-all ease-in-out duration-150   font-heading text-xl flex justify-between items-center">
                    1. UI/UX DESIGN
                    <span className="text-2xl group-open:rotate-180 transition"><i class="fa-solid fa-angle-down"></i></span>
                </summary>

                <ul className="mt-4 ml-2 text-gray-300 space-y-3">
                    <li className="flex items-center gap-3">
                        <i className="fa-regular fa-circle-check text-green-400"></i>
                        Wireframing & prototyping
                    </li>

                    <li className="flex items-center gap-3">
                        <i className="fa-regular fa-circle-check text-green-400"></i>
                        User interface design for web and mobile apps
                    </li>

                    <li className="flex items-center gap-3">
                        <i className="fa-regular fa-circle-check text-green-400"></i>
                        Usability testing & user feedback
                    </li>

                    <li className="flex items-center gap-3">
                        <i className="fa-regular fa-circle-check text-green-400"></i>
                        Interaction design & micro-animations
                    </li>
                </ul>
            </details>

        </div>
    )
}

export default Dropdown