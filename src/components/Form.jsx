import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../components/Button'
import gsap from 'gsap'

const Form = () => {

    const formRef = useRef()

    const headRef = useRef()
    useEffect(() => {
        gsap.from(headRef.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: headRef.current,
                start: "top 50%"
            }
        })
    }, [])

    const [notification, setNotification] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_g9cwriv',
            'template_2dgebzr',
            formRef.current,
            '6euSgWuNnskusrsjf'
        )
            .then(() => {

                setNotification("Message Sent Successfully ✅")

                formRef.current.reset()

                setTimeout(() => {
                    setNotification("")
                }, 3000)

            })
            .catch((error) => {

                console.log(error)

                setNotification("Failed To Send Message ❌")

                setTimeout(() => {
                    setNotification("")
                }, 3000)
            })
    }


    return (
        <div className="relative">

            {/* Notification */}
            {
                notification && (
                    <div className="fixed top-5 right-5 bg-black text-white px-6 py-3 rounded-full shadow-xl z-50">
                        {notification}
                    </div>
                )
            }

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="h-full w-full text-secondary px-10 md:px-20 flex items-center justify-center"
            >

                <div ref={headRef} className="w-full max-w-6xl text-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                name="user_name"
                                placeholder="Yash Sharma"
                                required
                                className="w-full bg-[#2c2c2c] text-white placeholder:text-gray-400 rounded-full px-8 py-2 outline-none border border-transparent focus:border-sectext-secondary"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="user_email"
                                placeholder="weblysite1804@gmail.com"
                                required
                                className="w-full bg-[#2c2c2c] text-white placeholder:text-gray-400 rounded-full px-8 py-2 outline-none border border-transparent focus:border-sectext-secondary"
                            />
                        </div>

                    </div>

                    <div className="mb-8">

                        <label className="block text-lg font-medium mb-2">
                            Service Needed ?
                        </label>

                        <select
                            name="service"
                            className="w-full appearance-none bg-[#2c2c2c] text-gray-300 rounded-full px-8 py-2 outline-none border border-sectext-secondary text-lg"
                        >
                            <option>Select...</option>
                            <option>Frontend Development</option>
                            <option>UI/UX Design</option>
                            <option>Portfolio Website</option>
                            <option>Full Website</option>
                        </select>

                    </div>

                    <div className="mb-10">

                        <label className="block text-lg font-medium mb-2">
                            What Can I Help You...
                        </label>

                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Hello, I'd like to enquire about..."
                            required
                            className="w-full bg-[#2c2c2c] text-white placeholder:text-gray-400 rounded-4xl px-8 py-4 outline-none border border-transparent focus:border-sectext-secondary resize-none"
                        />

                    </div>

                    {/* Submit Button */}
                    <Button text={"Submit"} type="submit" />
                </div>

            </form>
        </div>
    )
}

export default Form