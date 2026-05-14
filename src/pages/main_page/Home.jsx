import React from 'react'
import Herosec from '../Herosec'
import Survicesec from '../survicesec'
import Aboutsec from '../Aboutsecc'
import Projectsec from '../Projectsec'
import Skillset from '../Skillset'
import Contectsec from '../Contectsec'
import Footer from '../Footer'

const Home = () => {
    return (
        <div>
            <Herosec />
            <Survicesec />
            <Aboutsec />
            <Projectsec />
            <Skillset />
            <Contectsec />
            <Footer />
        </div>
    )
}

export default Home