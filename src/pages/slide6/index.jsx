import Box from "./box";
import { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { cardVariantsLeft, cardVariantsLeftForHeading } from "../../components/animations";

const Slide6 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    return (
        <div className="lg:h-[100vh] lg:flex lg:flex-col lg:justify-evenly " ref={ref}>
            <div className="">
                <div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }} className="text-lg sm:text-3xl xl:text-5xl lg:text-4xl font-bold flex justify-center py-16 lg:py-4 2xl:py-6">
                    <div variants={cardVariantsLeft} className="">    
                         EXPERTISE IN&nbsp;
                    </div>
                    <div variants={cardVariantsLeftForHeading} className="text-[#34d399]">TECHNOLOGIES</div>
                </div>
            </div>

            <Box isInView={isInView} />
        </div>
    )
}

export default Slide6;