import React from 'react'
import Dropdown from '../components/Dropdown'

const Survicesec = () => {
    const servicesData = [
        {
            title: "FRONTEND DEVELOPMENT",
            items: [
                "Building fast and interactive user interfaces using React",
                "Writing clean, maintainable, and scalable code",
                "Integrating APIs and dynamic data",
                "Optimizing performance and loading speed"
            ]
        },
        {
            title: "UI/UX DESIGN",
            items: [
                "Creating wireframes and interactive prototypes",
                "Designing intuitive and user-friendly interfaces",
                "Improving user experience through research and testing",
                "Adding smooth interactions and micro-animations"
            ]
        },
        {
            title: "WEBSITE DEVELOPMENT",
            items: [
                "Developing modern and fully functional websites",
                "Creating landing pages that convert users",
                "Ensuring cross-browser compatibility",
                "Maintaining and updating existing websites"
            ]
        },
        {
            title: "RESPONSIVE DESIGN",
            items: [
                "Designing layouts for all screen sizes",
                "Mobile-first development approach",
                "Ensuring consistent UI across devices",
                "Optimizing for accessibility and usability"
            ]
        }
    ];


    return (
        <div className=' lg:h-screen flex p-10 lg:p-20 items-center'>
            <div className='lg:w-1/2 '>
                <h1 className='font-heading text-5xl md:text-7xl '>
                    what I can do for you

                </h1>

                <p className=' md:text-lg lg:text-xl mt-4  w-100 lg:w-full'>
                    I develop responsive websites and manage website hosting to ensure smooth performance.
                </p>
                {servicesData.map((section, idx) => {
                    return (


                        <Dropdown key={idx} idx={idx + 1} heading={section.title} content1={section.items[0]} content2={section.items[1]} content3={section.items[2]} content4={section.items[3]} />

                    )
                })}
            </div>
            <div className='lg:w-1/2'></div>
        </div>
    )
}

export default Survicesec