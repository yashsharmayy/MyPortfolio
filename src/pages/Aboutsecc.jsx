import React, { useEffect, useRef, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import Icons from '../components/Icons'
import Heading from '../components/Heading'
import gsap from 'gsap'

const Aboutsec = ({ w = "1/2", hide = "" }) => {
    const [year, setYear] = useState(0)
    const [projects, setProjects] = useState(0)
    const [tech, setTech] = useState(0)

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



        return () => clearInterval(interval)
    }, [])


    return (
        <div className=' h-full flex p-10 lg:p-20 overflow-x-hidden items-center'>
            <div ref={headRef} className={`lg:w-${w} flex flex-col text-center items-center md:text-left md:items-start`}>
                <Heading head={"About me"} para={" Hi, I'm Yash — a frontend developer and digital designer passionate about building modern and impactful web experiences."} />
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
                        <h3 className='text-lg'>+91 8750634117</h3>
                    </div>
                    <div>
                        <h2 className=' text-2xl font-alt' >Email:</h2>
                        <h3 className='text-lg'>weblysite1804@gmail.com</h3>
                    </div>
                </div>
                <Icons color={'white'} />
                <div className={`my-10 ${hide} `}>

                    <Button link={"/about"} text={"my story"} />
                </div>

            </div>


        </div>
    )
}

export default Aboutsec