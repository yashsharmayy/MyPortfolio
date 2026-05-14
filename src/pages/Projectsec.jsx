import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";
import Card from "../components/Card";

gsap.registerPlugin(ScrollTrigger);


const Projectsec = () => {
    useEffect(() => {
        const cards = gsap.utils.toArray(".card");

        if (window.innerWidth >= 810) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cards-section",
                    start: "top top",
                    end: `+=${cards.length * 100}%`,
                    pin: true,
                    scrub: 1,
                },
            });

            cards.forEach((card, i) => {
                if (i === 0) return;

                // each card comes from bottom and stacks on top
                tl.fromTo(
                    card,
                    {
                        y: window.innerHeight,
                        scale: 1,
                    },
                    {
                        y: i * 20,
                        // scale: 1 - i * 0.05,
                        duration: 1,
                        ease: "power2.inOut",
                    },
                    i
                );
            });
            return () => {
                ScrollTrigger.getAll().forEach((t) => t.kill());
                tl.kill();
            };
        }

    }, []);

    return (
        <div className="text-white h-full my-8">

            {/* Top */}
            <section className="flex flex-col items-start p-10 md:p-20">
                <h1 className="font-heading text-5xl md:text-7xl">
                    Featured Projects
                </h1>

                <p className="mt-4 max-w-2xl">
                    These selected projects reflect my passion for blending strategy with creativity.
                </p>
            </section>

            {/* Cards */}
            <section className="cards-section py-20 flex justify-center">

                <div className="relative w-[80%] md:w-220 lg:w-270 md:h-145 lg:h-165 overflow-hidden">
                    <a href="https://yashsharmayy.github.io/Aurum_Luxe/">
                        <Card proname={"Aurum Luxe"} content={"Aurum Luxe is a modern jewellery website built with React, Tailwind CSS, and GSAP. It features a luxurious design, smooth animations, and a fully responsive layout for all devices."}
                            img={"./src/assets/pro1.png"} />

                    </a>
                    <a href="https://yashsharmayy.github.io/GYM_BRO/">

                        <Card proname={"GYM_BRO"} content={"A fully responsive gym website developed using React, enhanced with GSAP animations to deliver a dynamic and visually appealing user experience."}
                            img={"./src/assets/pro2.png"} />

                    </a>
                    <a href="https://yashsharmayy.github.io/MovieMasalaa/#/">


                        <Card proname={"Movie Masalaa"} content={"This is a Movie app in which you can search movie and its details , it,s a fully react based project"}
                            img={"./src/assets/pro3.png"} />

                    </a>

                    <a href="https://yashsharmayy.github.io/sundown/">

                        <Card proname={"Sundown Studio Clone"} content={"A modern and visually engaging frontend clone inspired by the Sundown Studio website. Built using HTML, CSS, and JavaScript with smooth animations, responsive layouts, and interactive UI elements."}
                            img={"./src/assets/pro4.png"} />
                    </a>


                </div>
            </section>
            <section className="w-full flex m-auto md:my-20  justify-center">
                <div className="my-10">

                    <Button text={"Browse all projects"} />
                </div>
            </section>
        </div>
    );
}

export default Projectsec