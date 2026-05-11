import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";

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
        <div className="text-white h-full">

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

                <div className="relative w-[80%] md:w-220 lg:w-270 md:h-145 lg:h-165">

                    {/* CARD 1 */}
                    <div className="card md:absolute relative top-10 rounded-3xl overflow-hidden shadow-2xl">

                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e" />

                        {/* Desktop overlay text */}
                        <div className="hidden md:flex absolute top-10 bg-black/20 flex-col justify-end p-6">
                            <h2 className="text-3xl font-bold">Project 1</h2>
                            <p className="text-sm opacity-80">
                                Nature photography website design
                            </p>
                        </div>

                    </div>

                    {/* Mobile text */}
                    <div className="md:hidden mb-6 relative mt-20">
                        <h2 className="text-2xl font-bold">Project 1</h2>
                        <p className="opacity-80">Nature photography website design</p>
                    </div>

                    {/* CARD 2 */}
                    <div className="card md:absolute relative top-10 translate-y-2 rounded-3xl overflow-hidden shadow-2xl">

                        <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f" />

                        <div className="hidden md:flex absolute top-10 bg-black/20 flex-col justify-end p-6">
                            <h2 className="text-3xl font-bold">Project 2</h2>
                            <p className="text-sm opacity-80">UI/UX design system</p>
                        </div>

                    </div>

                    <div className="md:hidden mb-6 relative mt-20">
                        <h2 className="text-2xl font-bold">Project 2</h2>
                        <p className="opacity-80">UI/UX design system</p>
                    </div>

                    {/* CARD 3 */}
                    <div className="card md:absolute relative top-10 translate-y-4 rounded-3xl overflow-hidden shadow-2xl">

                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" />

                        <div className="hidden md:flex absolute top-10 bg-black/20 flex-col justify-end p-6">
                            <h2 className="text-3xl font-bold">Project 3</h2>
                            <p className="text-sm opacity-80">Creative web animation</p>
                        </div>

                    </div>

                    <div className="md:hidden mb-6  relative mt-20">
                        <h2 className="text-2xl font-bold">Project 3</h2>
                        <p className="opacity-80">Creative web animation</p>
                    </div>

                    {/* CARD 4 */}
                    <div className="card md:absolute relative  top-10 translate-y-6  rounded-3xl overflow-hidden shadow-2xl">

                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" />

                        <div className="hidden md:flex absolute top-10 bg-black/20 flex-col justify-end p-6">
                            <h2 className="text-3xl font-bold">Project 4</h2>
                            <p className="text-sm opacity-80">Brand identity design</p>
                        </div>

                    </div>

                    <div className="md:hidden relative  mt-20">
                        <h2 className="text-2xl font-bold">Project 4</h2>
                        <p className="opacity-80">Brand identity design</p>
                    </div>

                </div>
            </section>
            <section className="w-full flex m-auto md:my-20  justify-center">

                <Button text={"Browse all projects"} />
            </section>
        </div>
    );
}

export default Projectsec