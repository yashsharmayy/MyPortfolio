import React, { useContext, useEffect } from 'react'
import Nav from './components/Nav'
import gsap from 'gsap'
import { hoverContext } from './components/Contexthover'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Imgcomp from './components/Imgcomp'
import Pagetransiton from './components/pagetransiton'
import { Routes, Route } from 'react-router-dom'
import About from './pages/main_page/About'
import Project from './pages/main_page/Project'
import Service from './pages/main_page/Service'
import Contact from './pages/main_page/Contact'
import Home from './pages/main_page/Home'


gsap.registerPlugin(ScrollTrigger)


const App = () => {
  const { prohover, setprohover } = useContext(hoverContext)
  const { Active, setActive } = useContext(hoverContext);
  const mousemove = (e) => {

    gsap.to(".dot", {
      x: e.clientX + 16,
      y: e.clientY + 16,
      rotation: Active ? 12 : 0,
      duration: 0.8,
      ease: "power3.out"
    })

  }
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

  }, [])




  return (

    <div
      onMouseMove={mousemove}
      className='relative w-full  overflow-hidden'
    >

      <div
        className={`
    hidden md:block dot bg-secondary overflow-hidden fixed top-0 left-0 pointer-events-none z-500

    ${prohover ? "w-12 h-12 rounded-full  transition-all duration-150 ease-in-out" : ""}
    

    ${Active == 0
            ? "w-4 h-4 rounded-full"
            : "w-45 h-25  translate-x-20 -translate-y-10 rotate-16  rounded-xl transition-all  duration-150 ease-in-out"
          }
  `}
      >
        {
          prohover && (
            <div className='flex  justify-center items-center '>
              <i className=" fa-solid fa-arrow-up-right-from-square p-0 text-2xl mt-3"></i>
            </div>
          )
        }

        {
          Active == 1 && (
            <Imgcomp num={1} />
          )
        }
        {
          Active == 2 && (
            <Imgcomp num={2} />
          )
        }
        {
          Active == 3 && (
            <Imgcomp num={3} />
          )
        }
        {
          Active == 4 && (
            <Imgcomp num={4} />
          )
        }


      </div >

      <video
        autoPlay
        muted
        loop
        className='bgvideo'
        src="src/assets/bg2.mp4"
      ></video>
      <Pagetransiton />

      <div className='w-full flex fixed z-50 items-center justify-center'>

        <Nav />
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>



    </div >
  )
}

export default App