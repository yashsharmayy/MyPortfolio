import React, { useEffect, useState } from 'react'
import heroimg from '../assets/heroimg4.png'
import gsap from 'gsap'

const Nav = () => {

    const [Scrolldirc, setScrolldirc] = useState("up")
    const [open, setopen] = useState(false)
    useEffect(() => {

        let lastscroll = window.scrollY


        const handleScroll = () => {

            const currentScroll = window.scrollY

            if (currentScroll > lastscroll + 10) {
                setScrolldirc("down")
                setopen(false)
            }

            else if (currentScroll < lastscroll - 10) {
                setScrolldirc("up")
            }

            lastscroll = currentScroll
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            setopen(false)
        }


    }, [])

    useEffect(() => {

        gsap.set(".openwork", {
            display: "flex"
        })


        if (window.innerWidth >= 720) {

            if (Scrolldirc === "down") {

                gsap.to(".openwork", {
                    opacity: 1,
                    scaleX: 1,
                    width: "auto",

                    duration: 0.4,
                    ease: "power2.out"
                })

                gsap.to(".navbar", {
                    opacity: 0,
                    scaleX: 0,
                    width: 0,
                    duration: 0.4,
                    ease: "power2.out"

                })

            } else {
                gsap.to(".openwork", {
                    opacity: 0,
                    scaleX: 0,
                    width: 0,
                    duration: 0.4,
                    ease: "power2.out"
                })


                gsap.to(".navbar", {
                    opacity: 1,
                    scaleX: 1,
                    width: "auto",
                    duration: 0.4,
                    ease: "power2.out"
                })
            }
        } else {

        }

    }, [Scrolldirc])

    let menu = () => {
        setopen(!open)
        if (!open) {
            gsap.to(".menu", {
                y: 20,
                opacity: 1,
                duration: 0.4,
                width: "60%"
            })
        } else {
            gsap.to(".menu", {
                y: -20,
                width: "0%",
                opacity: 0
            })
        }
    }




    return (

        <div className='relative w-full top-0 left-0  z-50 flex flex-col justify-center items-center mt-4 text-white '>

            <div className='flex w-fit bg-black/90 items-center justify-center rounded-full px-2'>

                <div className='logo w-12 h-12 rounded-full overflow-hidden  m-2'>
                    <img
                        className='w-full h-full object-cover object-top'
                        src={heroimg}
                        alt="profile"
                    />
                </div>

                <div
                    className='openwork flex items-center whitespace-nowrap origin-left px-2'                >
                    <span>Available for work</span>

                    <span className='w-2 h-2 rounded-full mx-4 bg-green-400'></span>
                    <i onClick={menu} className="fa-solid fa-bars-staggered cursor-pointer text-secondary text-xl mx-2"></i>
                </div>

                {/* Nav */}
                <ul className='navbar hidden md:flex  mx-2 gap-6 items-center'>

                    <li className='cursor-pointer btn'>
                        Home
                    </li>

                    <li className='cursor-pointer btn'>
                        About
                    </li>

                    <li className='cursor-pointer btn'>
                        Project
                    </li>

                    <li className='cursor-pointer btn'>
                        Services
                    </li>

                    <button className='px-6 py-2 m-2 bg-lime-300 text-black rounded-full hover:scale-105 transition-all'>
                        Contact
                    </button>

                </ul>
                <div
                    className={`menu flex-col absolute w-0 opacity-0 top-0 px-20 mt-15 bg-black/90  rounded-3xl p-6 `}
                >       <ul className='flex flex-col  gap-6 items-center'>

                        <li className='cursor-pointer btn'>
                            Home
                        </li>

                        <li className='cursor-pointer btn'>
                            About
                        </li>

                        <li className='cursor-pointer btn'>
                            Project
                        </li>

                        <li className='cursor-pointer btn'>
                            Services
                        </li>

                        <button className='px-6 py-2 m-2 bg-lime-300 text-black rounded-full hover:scale-105 transition-all'>
                            Contact
                        </button>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav