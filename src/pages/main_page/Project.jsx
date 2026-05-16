import React from 'react'
import Projectsec from '../Projectsec'
import Footer from '../Footer'

const Project = () => {
    return (
        <div>
            <Projectsec hide={"hidden"} />

            <div className='px-20 '>
                <h1 className='font-heading text-5xl md:text-7xl '>
                    More Projects

                </h1>
                <hr className='text-white' />
                <section className="py-20 px-4 md:px-10">
                    <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Card 1 */}
                        <a
                            href="https://yashsharmayy.github.io/Aurum_Luxe/"
                            target="_blank"
                            className="group"
                        >
                            <div className="overflow-hidden rounded-4xl">
                                <img
                                    src="/src/assets/pro1.png"
                                    alt="Aurum Luxe"
                                    className="w-full h-36 md:h-88 object-cover group-hover:scale-105 duration-500"
                                />
                            </div>

                            <div className="mt-6">

                                <span className="border border-lime-400 text-lime-400 px-5 py-2 rounded-full text-sm">
                                    React Project
                                </span>

                                <h1 className="text-4xl md:text-6xl font-heading uppercase mt-6 leading-none">
                                    Aurum Luxe
                                </h1>

                                <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                                    A modern jewellery website built with React, Tailwind CSS,
                                    and GSAP featuring smooth animations, premium visuals,
                                    and fully responsive layouts.
                                </p>

                            </div>
                        </a>

                        {/* Card 2 */}
                        <a
                            href="https://yashsharmayy.github.io/GYM_BRO/"
                            target="_blank"
                            className="group"
                        >
                            <div className="overflow-hidden rounded-4xl">
                                <img
                                    src="/src/assets/pro2.png"
                                    alt="GYM BRO"
                                    className="w-full h-36 md:h-88 object-cover group-hover:scale-105 duration-500"
                                />
                            </div>

                            <div className="mt-6">

                                <span className="border border-lime-400 text-lime-400 px-5 py-2 rounded-full text-sm">
                                    React + GSAP
                                </span>

                                <h1 className="text-4xl md:text-6xl font-heading uppercase mt-6 leading-none">
                                    GYM BRO
                                </h1>

                                <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                                    A fully responsive gym website developed using React and GSAP
                                    animations to create an engaging and energetic user experience.
                                </p>

                            </div>
                        </a>
                        <a
                            href="https://yashsharmayy.github.io/Aurum_Luxe/"
                            target="_blank"
                            className="group"
                        >
                            <div className="overflow-hidden rounded-4xl">
                                <img
                                    src="/src/assets/pro1.png"
                                    alt="Aurum Luxe"
                                    className="w-full h-36 md:h-88 object-cover group-hover:scale-105 duration-500"
                                />
                            </div>

                            <div className="mt-6">

                                <span className="border border-lime-400 text-lime-400 px-5 py-2 rounded-full text-sm">
                                    React Project
                                </span>

                                <h1 className="text-4xl md:text-6xl font-heading uppercase mt-6 leading-none">
                                    Aurum Luxe
                                </h1>

                                <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                                    A modern jewellery website built with React, Tailwind CSS,
                                    and GSAP featuring smooth animations, premium visuals,
                                    and fully responsive layouts.
                                </p>

                            </div>
                        </a>

                        {/* Card 2 */}
                        <a
                            href="https://yashsharmayy.github.io/GYM_BRO/"
                            target="_blank"
                            className="group"
                        >
                            <div className="overflow-hidden rounded-4xl">
                                <img
                                    src="/src/assets/pro2.png"
                                    alt="GYM BRO"
                                    className="w-full h-36 md:h-88 object-cover group-hover:scale-105 duration-500"
                                />
                            </div>

                            <div className="mt-6">

                                <span className="border border-lime-400 text-lime-400 px-5 py-2 rounded-full text-sm">
                                    React + GSAP
                                </span>

                                <h1 className="text-4xl md:text-6xl font-heading uppercase mt-6 leading-none">
                                    GYM BRO
                                </h1>

                                <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                                    A fully responsive gym website developed using React and GSAP
                                    animations to create an engaging and energetic user experience.
                                </p>

                            </div>
                        </a>

                    </div>
                </section>

            </div>

            <Footer />
        </div>
    )
}

export default Project