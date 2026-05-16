import React from 'react'

const Stepimg = ({ img }) => {
    return (
        <div className={`w-full h-full min-h-50  my-6 rounded-2xl overflow-hidden  m-4`}>
            <img src={img} className='w-full h-full object-center object-cover' alt="" />
        </div>
    )
}

export default Stepimg