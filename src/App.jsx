import React, { useEffect } from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import gsap from 'gsap'

const App = () => {



  const mousemove = (e) => {

    gsap.to(".dot", {
      x: e.clientX + 16,
      y: e.clientY + 16,
      duration: 0.8,
      ease: "power3.out"
    })

  }

  return (

    <div
      onMouseMove={mousemove}
      className='relative w-full  overflow-hidden'
    >

      <div className="hidden md:block dot bg-secondary w-4 h-4 rounded-full fixed top-0 left-0 pointer-events-none z-500"></div>

      <video
        autoPlay
        muted
        loop
        className='bgvideo'
        src="../src/assets/bg2.mp4"
      ></video>

      <Nav />
      <Home />

    </div>
  )
}

export default App