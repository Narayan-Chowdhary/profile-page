import Bg_image from '../../assests/images/slide5/showing-good-results-group-young-freelancers-office-have-conversation-smiling.png';
import ManufacturingIcon from '../../assests/images/slide5/manufacturing.png'
import TravelIcon from '../../assests/images/slide5/travel.png'
import InfoTechIcon from '../../assests/images/slide5/infotech.png'
import EcomIcon from '../../assests/images/slide5/ecommerce.png'
import EducationIcon from '../../assests/images/slide5/education.png'
import TelecomIcon from '../../assests/images/slide5/telecom.png'
import { motion, useInView } from "framer-motion";
import { cardVariantsLeft, cardVariantsLeftForHeading } from "../../components/animations";
import { useRef } from "react";

const Slide5 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false });

    const Json = [
        {
            icon: InfoTechIcon,
            name: 'Information Technology',
        },
         {
            icon: ManufacturingIcon,
            name: 'AutoMobile Industry',
        },
        {
            icon: TravelIcon,
            name: 'Travel & Logistics',
        },
        {
            icon: EcomIcon,
            name: 'E-Commerce',
        },
        {
            icon: EducationIcon,
            name: 'Education',
        },
        {
            icon: TelecomIcon,
            name: 'Telecom',
        }
    ]

    return (
        <div className="lg:h-[100vh] lg:flex lg:flex-col" style={{ backgroundImage: `url(${Bg_image})` }} ref={ref}>
            <div className='py-8 2xl:py-16'>
                <div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className="text-2xl sm:text-3xl xl:text-5xl lg:text-4xl font-bold flex justify-center underline_slide5 relative">
                    <div variants={cardVariantsLeft} className="text-[#34d399] ml-2">INDUSTRIES&nbsp;</div>
                    <div variants={cardVariantsLeftForHeading} className="">
                         SERVED
                    </div>
                </div>
                <p className='text-xl xl:text-2xl 2xl:text-3xl text-center pt-12'>
                    <span className='font-medium'>7+ Projects</span>
                    <span>&nbsp;Delievered  Across</span>
                    <span className='font-medium'>&nbsp;5+ Industries</span>
                </p>
            </div>

            <div className='lg:flex lg:grow py-12 lg:py-0'>
                <div className='flex flex-wrap w-[100%] m-auto'>
                    {Json.map((val, idx) => {
                        return (
                            <div key={`industry_${idx}`} className={`w-[50%] sm:w-[25%] md:w-1/6 h-[200px] lg:h-[140px] xl:h-[160px] 2xl:h-[200px] border-[#C5BCBC] industry_box_border flex justify-center`}>
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }} transition={{ duration: 0.5, delay: 0.2 }} className='flex justify-center items-center flex-col'>
                                    <img src={val.icon} className='h-[45px] w-auto' />
                                    <p className='mt-4 mb-0 text-[18px] 2xl:text-xl text-center hover:text-[#34d399] hover:cursor-pointer'>{val.name}</p>
                                </motion.div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Slide5;