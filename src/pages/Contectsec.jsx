import React from 'react'
import Button from '../components/Button'

const Contectsec = () => {

    return (
        <div>
            <section className="flex flex-col items-start my-8 p-10  md:px-20">
                <h1 className="font-heading text-5xl md:text-7xl">
                    Let's work together
                </h1>

                <p className="mt-4 max-w-2xl">
                    Let’s build something impactful together—whether it’s your brand, your website, or your next big idea.
                </p>
            </section>

            <form
                className="h-full w-full  text-secondary px-10 md:px-20 flex items-center justify-center"

            >
                <div className="w-full max-w-6xl text-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Yash Sharma"
                                className="w-full bg-[#2c2c2c] text-white placeholder:text-gray-400 rounded-full px-8 py-2 outline-none border border-transparent focus:border-sectext-secondary "
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="weblysite1804@gmail.com"
                                className="w-full bg-[#2c2c2c] text-white placeholder:text-gray-400 rounded-full px-8 py-2 outline-none border border-transparent focus:border-sectext-secondary "
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-lg font-medium mb-2">
                            Service Needed ?
                        </label>

                        <div className="relative">
                            <select
                                className="w-full appearance-none bg-[#2c2c2c] text-gray-300 rounded-full px-8 py-2 outline-none border border-sectext-secondary text-lg"
                            >
                                <option>Select...</option>
                                <option>Frontend Development</option>
                                <option>UI/UX Design</option>
                                <option>Portfolio Website</option>
                                <option>Full Website</option>
                            </select>


                        </div>
                    </div>

                    <div className="mb-10">
                        <label className="block text-lg font-medium mb-2">
                            What Can I Help You...
                        </label>

                        <textarea
                            rows="4"
                            placeholder="Hello, I'd like to enquire about..."
                            className="w-full bg-[#2c2c2c] text-white placeholder:text-gray-400 rounded-4xl px-8 py-4 outline-none border border-transparent focus:border-sectext-secondary  resize-none"
                        />
                    </div>

                    <div onClick={(e) => formsubmition(e)}>
                        <Button text={"Submit"} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contectsec