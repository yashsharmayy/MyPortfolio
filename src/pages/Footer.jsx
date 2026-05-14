import React from 'react'
import Icons from '../components/Icons'

const Footer = () => {
    return (
        <div>
            <footer className="w-full mt-10 bg-lime-300 text-bg-default px-8 md:px-14 py-8 rounded-t-4xl">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-4 border-b border-black/30">

                    <div>
                        <h3 className="text-xl mb-3 font-medium">Email :</h3>

                        <a
                            href="mailto:weblysite1804@gmail.com"
                            className="text-xl font-semibold"
                        >
                            weblysite@gmail.com
                        </a>
                    </div>

                    {/* Call */}
                    <div>
                        <h3 className="text-xl mb-3 font-medium">Call Today :</h3>

                        <a
                            href="tel:+911234567890"
                            className="text-xl font-semibold"
                        >
                            +91 8750634117
                        </a>
                    </div>


                    <div>
                        <h3 className="text-xl mb-3 font-medium">Social :</h3>

                        <Icons color={"bg-default"} />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

                    <p className="text-lg">
                        © Copyright 2025. All Rights Reserved by{" "}
                        <span className="font-semibold underline">
                            weblysite
                        </span>
                    </p>

                    <div className="flex items-center gap-3">
                        <p className="text-xl">Created by</p>

                        <div className="w-8 h-8 rounded-full bg-black text-lime-300 flex items-center justify-center font-bold ">
                            W
                        </div>

                        <p className="text-xl font-medium">
                            Weblysite
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer