import React from 'react'

const Nav = () => {
    return (
        <div className=' fixed top-0 left-0 w-full z-50 flex justify-center mt-4 text-white '>


            <div className='flex bg-black opacity-90 items-center rounded-4xl'>
                <div className='logo w-12 h-12 rounded-4xl overflow-hidden mr-8 m-2'>
                    <img className='w-full h-full object-center object-cover' src="https://images.unsplash.com/photo-1673972249409-2c27a19205b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
                </div>
                <ul className='flex mx-2 gap-6'>
                    <li className='btn'>Home</li>
                    <li className='btn'>About</li>
                    <li className='btn'>Project</li>
                    <li className='btn'>Services</li>
                </ul>
                <button className='px-6 py-2 m-2 bg-prime text-bg-default rounded-4xl'>Contact</button>
            </div>
        </div>
    )
}

export default Nav