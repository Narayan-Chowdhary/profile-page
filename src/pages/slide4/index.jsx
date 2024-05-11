import "../../App.css";
import js from "../../assests/New Images/tech/js.png";
import react from "../../assests/New Images/tech/react.png";
import node from "../../assests/New Images/tech/nodejs.png";
import express from "../../assests/New Images/tech/express.png";
import next from "../../assests/New Images/tech/nextjs.png";
import mongo from "../../assests/New Images/tech/mongodb.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { container, item, cardVariantsLeft, cardVariantsLeftForHeading } from "../../components/animations";

export default function Slide4() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false });

    const ourServices = [
        {
            icon: js,
            name: "JavaScript Developement",
            link: "https://www.github.com/narayan-chowdhary/"
        },
        {
            icon: react,
            name: `ReactJs Developement`,
            link: "https://www.github.com/narayan-chowdhary/"
        },
        {
            icon: next,
            name: `NextJs Developement`,
            link: "https://www.github.com/narayan-chowdhary/"
        },
        {
            icon: node,
            name: "NodeJs Developement",
            link: "https://www.github.com/narayan-chowdhary/"

        },
        {
            icon: express,
            name: "ExpressJs Developement",
            link: "https://www.github.com/narayan-chowdhary/"
        },
        {
            icon: mongo,
            name: "MongoDB ",
            link: "https://www.github.com/narayan-chowdhary/"
        }

    ]

    return (
        <>
            <div className="lg:h-[100vh]" ref={ref}>
                <div className="bg-no-repeat bg-center md:h-[100vh] md:flex md:justify-center md:items-center py-20 md:py-0">
                    <div className="flex flex-col item-center h-[100%] justify-evenly">

                        <div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className="flex justify-center mb-12 md:mb-0">
                            <div variants={cardVariantsLeft} className="text-[30px] md:text-[40px] lg:text-[50px] font-bold ">TECH&nbsp;</div>
                            <div variants={cardVariantsLeftForHeading} className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-[#34d399]">STACK</div>
                        </div>

                        <div className="object-contain">
                            <motion.ul className="flex gap-x-4 gap-y-4 2xl:gap-y-10 flex-wrap object-contain justify-center items-center md:w-[90%] mx-auto" variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                                {
                                    ourServices?.map((e, i) => {
                                        return (
                                            <motion.li key={i} variants={item} className="cursor-pointer inline-block w-[45%] sm:w-[28%] lg:w-[18%] ">
                                                <a href={e.link} target="blank">
                                                    <div key={i} className="border-2 hover:!border-[#34d399] hover:text-[#34d399]  shadow-sm bg-services rounded-[20px] bg-[#FBFBFB] dark:bg-[#464444] dark:border-[#464444] w-full h-[150px] md:h-[150px] xl:h-[180px] 2xl:h-[220px] text-start flex justify-center items-center flex-col ">
                                                        <div className="">
                                                            <img src={e.icon} alt="" className="h-[40px] w-auto" />
                                                        </div>
                                                        <div className="text-[14px] md:text-[16px] xl:text-[18px] mt-[20px] xl:mt-[28px] text-center font-medium break-word flex justify-center ">
                                                            {e.name}
                                                        </div>
                                                    </div>
                                                </a>
                                            </motion.li>
                                        )
                                    })
                                }
                            </motion.ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}