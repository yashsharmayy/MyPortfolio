import React from 'react'
import Heading from './Heading'
import StepCard from './StepCard'
import Stepimg from './stepimg'

const Creation = () => {
    return (
        <div className='p-20'>
            <Heading head={"Build Modern Websites with Creativity & Precision"}
                para={"I combine clean design, smooth animations, and modern frontend development to create websites that feel interactive, responsive, and visually engaging."} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20'>

                <StepCard
                    num={"01"}
                    head={"Planning & Research"}
                    para={"I start by understanding project goals, user needs, and website structure before development begins."}


                />

                <Stepimg
                    img={"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop"}
                />

                <StepCard
                    num={"02"}
                    head={"UI Design & Inspiration"}
                    para={"I create clean and modern layouts focused on visual appeal, readability, and smooth user experience."}
                    bgcolor={"secondary"}
                    textColor={"bg-default"}
                />

                <StepCard
                    num={"03"}
                    head={"Frontend Development"}
                    para={"Using React, Tailwind CSS, JavaScript, and GSAP, I build responsive and interactive interfaces."}
                    bgcolor={"black"}
                    textColor={"primery"}
                />

                <div className='lg:col-span-2'>
                    <StepCard
                        num={"04"}
                        head={"Animation & Responsiveness"}
                        para={"I add smooth animations, responsive behavior, and optimize performance across all devices."}
                        bgcolor={"secondary"}
                        textColor={"bg-default"}
                    />
                </div>

                <div className='lg:col-span-2'>
                    <Stepimg
                        img={"https://t3.ftcdn.net/jpg/03/67/11/50/240_F_367115012_XKquocU4xrg79qEk9ZhUWuuEoJlyUTsr.jpg"}
                    />
                </div>

                <div className='lg:col-span-4'>
                    <StepCard
                        num={"05"}
                        head={"Testing & Launch"}
                        para={"Before delivery, I test the website for responsiveness, performance, and smooth functionality."}
                        textColor={"bg-default"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Creation