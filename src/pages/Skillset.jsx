import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skillset = () => {

    const sectionRef = useRef(null)
    const leftRef = useRef(null)
    const skillsRef = useRef([])

    useEffect(() => {

        // PIN LEFT SECTION


        // SKILL ANIMATION

        if (window.innerWidth >= 820) {
            const trigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftRef.current,
            })
            skillsRef.current.forEach((skill) => {
                gsap.fromTo(
                    skill,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: skill,
                            start: "top 80%",
                            end: "top 50%",
                            scrub: 1,
                        }
                    }
                )

            })
        }

        return () => {
            trigger.kill()
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }

    }, [])

    const skills = [
        {
            name: "HTML",
            img: "https://ocscode.com/skill-icons/html-icon.png"
        },
        {
            name: "CSS",
            img: "https://images.icon-icons.com/844/PNG/512/CSS3_icon-icons.com_67069.png"
        },
        {
            name: "JavaScript",
            img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
        },
        {
            name: "React",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
        },
        {
            name: "Tailwind",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
        },
        {
            name: "GSAP",
            img: "https://gsap.com/community/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png"
        },

        {
            name: "MySQL",
            img: "https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-svg-vector.svg"
        },

        {
            name: "GitHub",
            img: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
    ]

    return (

        <div
            ref={sectionRef}
            className='flex relative md:flex-row flex-col items-center md:items-start'
        >

            <div
                ref={leftRef}
                className='w-1/2 h-full md:min-h-screen  flex  items-center p-4 md:p-20'
            >

                <div>
                    <h1 className='text-4xl md:text-7xl  text-secondary font-bold'>
                        Tech Stack
                    </h1>

                    <p className='mt-5 md:text-xl max-w-xl'>
                        Technologies and tools I use to create modern,
                        responsive, and interactive web experiences.
                    </p>
                </div>

            </div>

            <div className='w-1/2 md:ml-auto min-h-[250vh] flex flex-col justify-center gap-40 px-2 md:px-20'>

                {skills.map((skill, index) => (

                    <div
                        key={index}
                        ref={(el) => skillsRef.current[index] = el}
                        className='flex items-center gap-8 opacity-110 md:opacity-0'
                    >

                        <img
                            src={skill.img}
                            alt={skill.name}
                            className='w-20 h-20 object-contain'
                        />

                        <h1 className='text-4xl md:text-7xl font-bold'>
                            {skill.name}
                        </h1>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Skillset