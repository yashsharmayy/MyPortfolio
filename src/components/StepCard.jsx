
import React from 'react'

const StepCard = ({ para, head, num, bgcolor = "white", textColor = "bg-default" }) => {
    return (
        <div className={`w-full  bg-${bgcolor} shadow-2xl  h-full min-h-50 p-8 my-6 rounded-2xl text-${textColor} m-4`}>
            <h1 className={`text-5xl font-heading my-4 `}>{num}.</h1>
            <h2 className='font-alt text-3xl my-2'>{head}</h2>
            <p>{para}</p>
        </div>
    )
}

export default StepCard