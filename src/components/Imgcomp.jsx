import React from 'react'

const Imgcomp = ({ num }) => {
    return (
        <img
            className='w-full h-full object-cover object-center'
            src={`./src/assets/subimg0${num}.png`} alt=""
        />
    )
}

export default Imgcomp