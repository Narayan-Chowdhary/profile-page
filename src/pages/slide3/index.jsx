import hero from '../../assests/New Images/contact/code.jpg'
import { motion, useInView } from "framer-motion";
import { cardVariantsLeft, cardVariantsLeftForHeading } from "../../components/animations";
import { useRef } from "react";

const json = [
    {
        heading: 'Profile',
        text:" Experienced MERN Stack Developer, Proficient in crafting visually appealing interfaces and implementing responsive design principles!" ,
    },
    {
        heading: 'Tech Stack',
        text:  "HTML/CSS, JavaScript, ReactJs, Redux/Redux-toolkit, NextJs, NodeJs, ExpressJs, MongoDB, Material UI, TailwindCss, Git/GitHub"
    },
    {
        heading: 'Project Details',
        text: 'Completed 7 Projects Including few landing pages ,some websites and one Major Government Service Project'
    }
]

const Slide3 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false });

    return (
        <div className="md:h-[100vh] flex flex-col relative justify-evenly lg:justify-start" ref={ref}>
            <div className="flex w-full">
                <div className="w-[50%] hidden lg:block">
                    <img src={hero} alt="Slide 3 Hero" className='' />
                </div>
                <div className="md:w-[80%] lg:w-[50%] lg:py-16 xl:py-8 2xl:py-16 px-4 md:px-16 xl:px-20">
                    <div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className="text-3xl xl:text-5xl lg:text-4xl font-bold flex">
                        <div variants={cardVariantsLeft} className="text-[#34d399]">
                            WHAT&nbsp;
                        </div>
                        <div variants={cardVariantsLeftForHeading} className="">I DO?</div>
                    </div>
                    <p className="text-base xl:text-xl lg:text-xl mt-2 lg:mt-6 lg:mr-[5%] xl:mr-[20%]"> Committed to crafting efficient and visually appealing web applications with one year of dedicated practice!</p>
                </div>
            </div>
            <div className='flex justify-center pb-8 md:pb-0 mt-12 md:mt-0'>
                <div className='flex flex-col md:flex-row w-full lg:w-[98%] xl:w-[95%] 2xl:w-[80%] mx-auto justify-around lg:items-end lg:absolute bottom-[55px] 2xl:bottom-[75px] xl:bottom-[55px] transform_custom'>
                    {json && json.map((row, i) => (
                        <>
                            {i == 0 ?
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }} transition={{ duration: 0.5 }} className='w-full md:w-[30%] lg:w-[35%] lg:h-[310px] xl:h-[350px] 2xl:h-[450px] bg-[#34d399] text-white my-4 md:my-0 p-8 lg:px-8 md:py-4 lg:py-12 '>
                                    <h2 className='font-bold text-xl lg:text-2xl xl:text-3xl md:min-h-[64px]'>{row.heading}</h2>
                                    <p className='text-base xl:text-xl mt-4 md:mt-2 lg:mt-4'>{row.text}</p>

                                </motion.div>
                                :
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }} transition={{ duration: 0.5 }} className='w-full md:w-[30%] lg:h-[280px] xl:h-[300px] 2xl:h-[380px] bg-[#f9f9f9] dark:bg-[#464444] my-4 md:my-0 p-8 md:py-4 lg:py-8 '>
                                    <h2 className='font-bold text-base lg:text-xl xl:text-2xl md:min-h-[64px]'>{row.heading}</h2>
                                    <p className='text-base xl:text-xl mt-4 md:mt-2 lg:mt-4'>{row.text}</p>
                                </motion.div>
                            }
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slide3;