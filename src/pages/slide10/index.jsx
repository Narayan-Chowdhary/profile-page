// import img1 from "../../assests/images/slide13/img1.png"
// import img2 from "../../assests/images/slide13/img2.png"
// import img3 from "../../assests/images/slide13/img3.png"
// import img4 from "../../assests/images/slide13/img4.png"
// import img5 from "../../assests/images/slide13/img5.png"
// import img6 from "../../assests/images/slide13/img6.png"
// import img7 from "../../assests/images/slide13/img7.png"
// import img7black from "../../assests/images/slide13/img7black.png"
// import img8 from "../../assests/images/slide13/img8.png"
// import img9 from "../../assests/images/slide13/img9.png"
// import img10 from "../../assests/images/slide13/img10.png"
// import img11 from "../../assests/images/slide13/img11.png"
// import img12 from "../../assests/images/slide13/img12.png"
// import img13 from "../../assests/images/slide13/img13.png"
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { container, item } from "../../components/animations"

// export default function Slide13() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: false });
    
//     return (
//         <>
//             <div className="lg:h-[100vh] flex justify-center items-center pt-12 pb-6 lg:pt-0 lg:pb-0" ref={ref}>
//                 <div className="h-fit flex lg:scale-95 xl:scale-[0.85] 2xl:scale-[0.92]">
//                     <motion.ul className="grid gap-1 md:gap-3 grid-cols-12" variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"}>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img1} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img2} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img3} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img4} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img5} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-2 grayscale hover:filter-none transition duration-300">
//                             <img src={img6} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-2 ">
//                             <img src={img7} alt="" className="dark:!hidden" />
//                             <img src={img7black} alt="" className="!hidden dark:!block " />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-2 grayscale hover:filter-none transition duration-300">
//                             <img src={img8} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img9} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img10} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img11} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img12} alt="" className="" />
//                         </motion.li>
//                         <motion.li variants={item} className="flex col-span-3 grayscale hover:filter-none transition duration-300">
//                             <img src={img13} alt="" className="" />
//                         </motion.li>
//                     </motion.ul>
//                 </div>
//             </div>
//         </>
//     )
// }


