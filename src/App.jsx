import React, { useContext, useEffect } from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import gsap from 'gsap'
import { hoverContext } from './components/Contexthover'

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
            src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=400"
            alt=""
          />
        )}
        {Active == 2 && (
          <img
            className='w-full h-full object-cover object-center'
            src='https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww' alt=""
          />
        )}
        {Active == 3 && (
          <img
            className='w-full h-full object-cover object-center'
            src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        )}
        {Active == 4 && (
          <img
            className='w-full h-full object-cover object-center'
            src='https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D' alt=""
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

      <Nav />
      <Home />

    </div>
  )
}

export default App