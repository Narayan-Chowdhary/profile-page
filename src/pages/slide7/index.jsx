import circleSlide from "../../assests/images/slide7/bgslide1.png"
import "../../App.css"
import { motion, useInView } from "framer-motion";
import { cardVariantsLeft, cardVariantsLeftForHeading, cardVariantsRight } from "../../components/animations";
import { useRef } from "react";

const details = {
    first: [{
        title: "Requirements",
        desc: "Gather, Define, Prioritize, Align"
    },
    {
        title: "Plan",
        desc: "Test, Resolve, Address, Quality Assurance"
    },
    {
        title: "Design",
        desc: "Create, Prototype, Iterate, Incorporate"
    }],
    image: [circleSlide],

    third: [
        {
            title: "Development",
            desc: "Implement, Collaborate, Agile, Break down"
        },
        {
            title: "Deployment",
            desc: "Deploy, Integrate, Scalability, Plan"
        },

        {
            title: "Review",
            desc: "Review, Adapt, Feedback, Improve"
        },
    ]
}

export default function Slide7() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false });

    return (
        <>
            <div className="md:flex md:items-center md:justify-evenly md:flex-col md:h-[100vh] py-16 md:py-0 overflow-hidden" ref={ref}>
                <div className="flex justify-center font-bold text-[30px] sm:text-[50px]  ">
                    <div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className="flex">
                        <div variants={cardVariantsLeft} className="">HOW DO&nbsp;</div>
                        <div variants={cardVariantsLeftForHeading} className="text-[#34d399]">I DO IT ?</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 align-middle md:gap-20 pl-8 md:pl-0">

                    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className="inline-grid order-1">
                        <motion.div variants={cardVariantsLeft} className="inline-grid items-center">
                            {details?.first?.map((e, i) => {
                                return (
                                    <div key={i} className="  first_content relative">
                                        <div className="flex flex-col justify-evenly text-left md:text-right after_underline_slide7 md:mr-5 mt-5 ml-4 md:ml-0">
                                            <div className="text-[20px] sm:text-[25px] font-[600]">{e.title}</div>
                                            <div>{e.desc}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </motion.div>

                    <div className="inline-grid items-center order-3 md:order-2">
                        {details?.image?.map((e, i) => {
                            return (
                                <motion.div key={i} className="items-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }} transition={{ duration: 0.5 }}>
                                    <div className=" h-[100%] -ml-8 md:ml-0">
                                        <img src={e} alt="" style={{filter:"invert(1)"}} />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className="inline-grid order-2 md:order-3">
                        <motion.div variants={cardVariantsRight} className="inline-grid items-center">
                            {details?.third?.map((e, i) => {
                                return (
                                    <div key={i} className=" last_content relative">
                                        <div className="flex flex-col justify-evenly text-left  after_underline_slide7 md:mr-5 mt-5 ml-4 md:ml-5">
                                            <div className="text-[20px] sm:text-[25px] font-[600]">{e.title}</div>
                                            <div>{e.desc}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </motion.div>

                </div>
            </div>

        </>
    )
}