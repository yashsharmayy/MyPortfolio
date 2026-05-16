import React from 'react'
import Projectsec from '../Projectsec'
import Footer from '../Footer'
import Procard from '../../components/Procard'

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
                        <Procard
                            link={"https://yashsharmayy.github.io/Learnify/"}
                            proimg={"subimg03"}
                            subname={"HTML • CSS • JavaScript • GSAP"}
                            name={"Liernify"}
                            discription={
                                "A modern and responsive coffee shop landing page featuring a clean UI, stylish coffee-themed design, responsive layout, and interactive sections built using HTML, CSS, and JavaScript."
                            }
                        />
                        <Procard
                            link={"https://yashsharmayy.github.io/Frontend_project/snake-game/snake.html"}
                            proimg={"subimg04"}
                            subname={"JavaScript"}
                            name={"Snake Game"}
                            discription={
                                "A classic Snake Game built using HTML, CSS, and JavaScript.This project helped me understand core game logic, DOM manipulation, and state management in JavaScript."}
                        />
                        <Procard
                            link={"https://yashsharmayy.github.io/coffee/"}
                            proimg={"subimg001"}
                            subname={"HTML • CSS • JavaScript"}
                            name={"Coffee Website"}
                            discription={
                                "A modern and responsive coffee shop landing page featuring a clean UI, stylish coffee-themed design, responsive layout, and interactive sections built using HTML, CSS, and JavaScript."
                            }
                        />
                        <Procard
                            link={"https://yashsharmayy.github.io/Frontend_project/weather%20app/weather.html"}
                            proimg={"subimg02"}
                            subname={"HTML • CSS • JavaScript"}
                            name={"Weather App"}
                            discription={
                                "A modern weather application that provides real-time weather updates, temperature, humidity, and wind details using API integration with a clean and responsive user interface."
                            }
                        />

                        {/* Card 2 */}

                    </div>
                </section>

            </div>

            <Footer />
        </div>
    )
}

export default Project