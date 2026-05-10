import React, { useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'

const Aboutsec = () => {
    const [year, setYear] = useState(0)
    const [projects, setProjects] = useState(0)
    const [tech, setTech] = useState(0)


    useEffect(() => {
        let y = 0, p = 0, t = 0;

        const interval = setInterval(() => {
            if (y < 2) {
                y++
                setYear(y)
            }

            if (p < 15) {
                p++
                setProjects(p)
            }

            if (t < 7) {
                t++
                setTech(t)
            }

            if (y >= 2 && p >= 15 && t >= 7) {
                clearInterval(interval)
            }

        }, 80)
        console.log(y, p, t);


        return () => clearInterval(interval)
    }, [])


    return (
        <div className=' lg:h-screen flex p-10 lg:p-20 items-center'>
            <div className='lg:w-1/2 flex flex-col text-center items-center md:text-left md:items-start'>
                <h1 className='font-heading text-5xl md:text-7xl '>
                    About me

                </h1>

                <p className=' md:text-lg lg:text-xl mt-4 md:w-125 lg:w-full '>
                    Hi, I'm Yash — a frontend developer and digital designer passionate about building modern and impactful web experiences.
                </p>
                <div className='flex md:flex-row flex-col gap-6 my-4'>
                    <div>
                        <h1 className=' my-2 font-alt text-6xl text-secondary'>{year}+</h1>
                        <p className='text-xl font-alt '>Years of Learning</p>
                    </div>
                    <div>
                        <h1 className='my-2 font-alt text-6xl text-secondary'>{projects}+</h1>
                        <p className='text-xl font-alt '>Completed Projects</p>
                    </div>
                    <div>
                        <h1 className='my-2 font-alt text-6xl text-secondary'>{tech}+</h1>
                        <p className='text-xl font-alt '>Technologies Learned</p>
                    </div>
                </div>
                <div className='my-8 flex md:flex-row flex-col gap-8'>
                    <div>
                        <h2 className=' text-2xl font-alt' >Call Today:</h2>
                        <h3 className='text-lg'>+91 9717100000</h3>
                    </div>
                    <div>
                        <h2 className=' text-2xl font-alt' >Email:</h2>
                        <h3 className='text-lg'>weblysite1804@gmail.com</h3>
                    </div>
                </div>
                <div className="flex gap-6 mt-6 text-2xl text-white">

                    <a href="https://www.instagram.com/weblysite/" target="_blank" rel="noreferrer"
                        className="hover:text-pink-500 transition">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.youtube.com/@WeblySite00" target="_blank" rel="noreferrer"
                        className="hover:text-red-500 transition">
                        <i className="fa-brands fa-youtube"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/yash-sharma-b4a3923b5/" target="_blank" rel="noreferrer"
                        className="hover:text-blue-500 transition">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/yashsharmayy" target="_blank" rel="noreferrer"
                        className="hover:text-gray-400 transition">
                        <i className="fa-brands fa-github"></i>
                    </a>

                </div>
                <button className='storybtn relative hover:scale-99  overflow-hidden font-heading py-2 px-8  border-secondary border my-10 rounded-full text-3xl text-secondary'>

                    <a href="#" className='relative z-10'>my Story</a>
                    <div className='btneffect  absolute transition-all ease-in-out duration-300 w-40 h-25 top-13 -left-25 rounded-full bg-secondary'></div>
                </button>

            </div>
            <div className='lg:w-1/2'></div>
        </div>
    )
}

export default Aboutsec