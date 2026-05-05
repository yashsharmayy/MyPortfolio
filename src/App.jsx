import React from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='relative'>
      <video autoPlay muted loop className='bgvideo' src="..\src\assets\bg2.mp4"></video>
      <Nav />
      <Home />

    </div>
  )
}

export default App