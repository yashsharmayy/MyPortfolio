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

                <div className="relative w-[80%] md:w-220 lg:w-270 md:h-145 lg:h-165">
                    <Card proname={"Project 1"} content={"Nature photography website design"} img={"https://images.unsplash.com/photo-1472214103451-9374bd1c798e"} />
                    <Card proname={"Project 2"} content={"UI/UX design system"} img={"https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f"} />
                    <Card proname={"Project 3"} content={"Creative web animation"} img={"https://images.unsplash.com/photo-1469474968028-56623f02e42e"} />
                    <Card proname={"Project 4"} content={"Brand identity design"} img={"https://images.unsplash.com/photo-1501785888041-af3ef285b470"} />

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