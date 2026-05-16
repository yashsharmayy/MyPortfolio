import React from 'react'

const Imgcomp = ({ imgpath }) => {
    return (
        <img
            className='w-full h-full object-cover object-center'
            src={imgpath} alt=""
        />
    )
}

export default Imgcomp