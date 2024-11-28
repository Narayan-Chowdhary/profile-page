import Bg_image from "../../assests/New Images/contact/contact.jpg";
import WebIcon from "../../assests/images/slide15/web.png";
import TelIcon from "../../assests/images/slide15/tel.png";
import EmailIcon from "../../assests/images/slide15/email.png";
import Linkedin from "../../assests/images/slide1/linkedin.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  cardVariantsBottomWithDelay,
  cardVariantsLeft,
} from "../../components/animations";

const Slide15 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="lg:h-[100vh] flex relative" ref={ref}>
      <div className="lg:w-[60%] h-full py-12 2xl:py-24">
        <div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full lg:w-[65%] xl:w-full pl-4 lg:pl-16"
        >
          <div
            variants={cardVariantsLeft}
            className="text-3xl xl:text-5xl lg:text-4xl text-[#34d399] font-bold"
          >
            Hire me
          </div>
          <p className="text-2xl mt-4"></p>
          <p className="text-2xl font-medium">Let's catch up!</p>
          <div className="mt-4 w-[150px] h-[5px] bg-[#333] dark:bg-[#707070]"></div>
        </div>

        <div className="text-2xl lg:text-lg xl:text-xl 2xl:text-2xl mt-16 2xl:mt-36 lg:w-[75%] xl:w-[65%] 2xl:w-[50%] pr-8 lg:pr-0 pl-4 lg:pl-16">
          <p className="mt-8 xl:mt-16">
            Generally, bespoke software development projects exhibit superior
            success rates when contrasted with off-the-shelf software
            deployments.
          </p>
        </div>

        <div className="lg:absolute lg:w-[450px] xl:w-[500px] top-[10px] xl:top-[8%] 2xl:top-[15%] left-[70%] 2xl:left-[60%] lg:translate-x-[-50%] mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#34d399] text-white p-6 text-xl contact_us relative">
              <p>I'm eager to connect more deeply with you.</p>
              <p>Get In Touch!</p>
            </div>
            <div className="bg-white dark:bg-[#464444] px-4 sm:px-8 pb-4 pt-12 xl:px-16 xl:pb-8 shadow_slide15_2">
              <motion.ul
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.li
                  variants={cardVariantsBottomWithDelay}
                  className="my-4 2xl:my-8"
                >
                  <a
                    className="bg-white dark:bg-[#464444] w-full sm:w-[330px] rounded-[57px] h-[57px] flex items-center hover:!bg-[#34d399]  ease-in-out duration-300 pl-4 sm:pl-8"
                    target="_blank"
                    href="https://wa.me/+919723973229"
                  >
                    <img
                      src={TelIcon}
                      width="30"
                      alt="Telephone"
                      className="dark:invert"
                    />
                    <span className="ml-4 text-lg font-medium text-[#333] dark:text-white">
                      +91 9723973229
                    </span>
                  </a>
                </motion.li>
                <motion.li
                  variants={cardVariantsBottomWithDelay}
                  className="my-4 2xl:my-8"
                >
                  <a
                    className="bg-white dark:bg-[#464444] w-full sm:w-[330px] rounded-[57px] h-[57px] flex items-center hover:!bg-[#34d399]  ease-in-out duration-300 pl-4 sm:pl-8"
                    href="mailto:narayan97.nk@gmail.com"
                  >
                    <img
                      src={EmailIcon}
                      width="30"
                      alt="Email"
                      className="dark:invert"
                    />
                    <span className="ml-4 text-lg font-medium text-[#333] dark:text-white">
                      narayan97.nk@gmail.com
                    </span>
                  </a>
                </motion.li>
                <motion.li
                  variants={cardVariantsBottomWithDelay}
                  className="my-4 2xl:my-8"
                >
                  <a
                    className="bg-white dark:bg-[#464444] w-full sm:w-[330px] rounded-[57px] h-[57px] flex items-center hover:!bg-[#34d399]  ease-in-out duration-300 pl-4 sm:pl-8"
                    href="https://www.linkedin.com/in/narayan-chowdhary-378689251"
                    target="_blank"
                  >
                    <img
                      src={Linkedin}
                      width="30"
                      alt="Globe"
                      className="dark:invert"
                    />
                    <span className="ml-4 text-lg font-medium text-[#333] dark:text-white">
                      LinkedIn
                    </span>
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-[40%] h-full bg-sky-400 hidden lg:block">
        <img src={Bg_image} alt="Background Image" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Slide15;
