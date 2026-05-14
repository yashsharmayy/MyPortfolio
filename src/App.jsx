import React, { useContext, useEffect } from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import gsap from 'gsap'
import { hoverContext } from './components/Contexthover'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const App = () => {

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

    

    ${Active == 0
            ? "w-4 h-4 rounded-full "
            : "w-45 h-25  translate-x-20 -translate-y-10 rotate-16  rounded-xl transition-all  duration-150 ease-in-out"
          }
  `}
      >

        {Active == 1 && (
          <img
            className='w-full h-full object-cover object-center'
            src=".\src\assets\subimg01.png"
            alt=""
          />
        )}
        {Active == 2 && (
          <img
            className='w-full h-full object-cover object-center'
            src=".\src\assets\subimg02.png"
            alt=""
          />
        )}
        {Active == 3 && (
          <img
            className='w-full h-full object-cover object-center'
            src=".\src\assets\subimg03.png"
            alt=""
          />
        )}
        {Active == 4 && (
          <img
            className='w-full h-full object-cover object-center'
            src=".\src\assets\subimg04.png"
            alt=""
          />
        )}


      </div>

      <video
        autoPlay
        muted
        loop
        className='bgvideo'
        src="../src/assets/bg2.mp4"
      ></video>

      <div className='w-full flex fixed z-50 items-center justify-center'>

        <Nav />
      </div>

      <Home />

    </div>
  )
}

export default App