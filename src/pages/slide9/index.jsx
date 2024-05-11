import client from '../../assests/New Images/tech/client.png';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Slide12() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false });

    const ourApproach = [
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },

        {
            logo: client,
            altName: 'client'
        },
        {
            //keep it blank for index 11 - IMP
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },
        {
            logo: client,
            altName: 'client'
        },

    ]
    return (
        <>
            <div className='lg:h-[100vh] flex items-center' ref={ref}>
                <div className='grid grid-cols-5 gap-x-2 gap-y-4 2xl:gap-x-4 2xl:gap-y-8 w-[90%] mx-auto'>
                    {ourApproach && ourApproach.map((item, index) => (
                        <>
                            {index === 11 ? <motion.div className='border border-[red] col-span-3 rounded-lg md:mx-2 lg:mx-4 bg-[#34d399]' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}><MessageCmp /></motion.div>
                                :
                                <div key={index} className={` border border-[#707070] dark:bg-white rounded-lg h-10 sm:h-16 lg:h-20 2xl:h-28 flex justify-center items-center cursor-pointer filter grayscale hover:filter-none transition duration-300`}>
                                    <motion.div className='flex justify-center items-center' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}>
                                        <img src={item.logo} alt={item.altName} className='w-[40px] md:w-[50px] 2xl:w-[70px] p-2 sm:p-0' />
                                    </motion.div>
                                </div>
                            }
                        </>
                    ))}
                </div>

            </div>

        </>
    )
}

function MessageCmp(props) {
    return (
        <>
            <div className='text-[10px] sm:text-[14px] md:text-[20px] lg:text-[24px] 2xl:text-[31px] text-white text-center flex justify-center h-full items-center !leading-tight'>
                <h1 className='text-center xl:px-16 2xl:px-48'>
                    On this table full of professionals,<br /> we've saved you a seat
                </h1>
            </div>
        </>

    )
}