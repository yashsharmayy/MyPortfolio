import React from 'react'

const Icons = ({ color }) => {
    return (
        <div className={`flex gap-6 mt-6 text-2xl text-${color}`}>

            <a href="https://www.instagram.com/weblysite/" target="_blank" rel="noreferrer"
                className="hover:text-pink-500 transition">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/@WeblySite00" target="_blank" rel="noreferrer"
                className="hover:text-red-500 transition">
                <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="https://www.linkedin.com/in/yash-sharma-b4a3923b5/" target="_blank" rel="noreferrer"
                className="hover:text-blue-500 transition">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/yashsharmayy" target="_blank" rel="noreferrer"
                className="hover:text-gray-400 transition">
                <i className="fa-brands fa-github"></i>
            </a>

        </div>)
}

export default Icons