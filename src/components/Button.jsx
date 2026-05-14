import React from 'react'

const Button = ({ text, type = "button", link = "/" }) => {
    return (
        <div>
            <button type={type} className='storybtn relative hover:scale-99   font-heading py-2 px-8  border-secondary border  rounded-full text-3xl text-secondary'>

                <a href={link} className='relative z-10'>{text}</a>
                <div className='btneffect  absolute transition-all ease-in-out duration-300 w-40 h-25  rounded-full bg-secondary'></div>
            </button>
        </div>
    )
}

export default Button