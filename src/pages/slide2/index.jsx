import LeftImage from "../../assests/New Images/contact/ImageDp.jpg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  cardVariantsBottom,
  cardVariantsLeft,
  cardVariantsLeftForHeading,
} from "../../components/animations";

export default function Slide2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const companyDetails = [
    {
      num: 2,
      text: "Year of Experience",
    },
    {
      num: 2,
      text: "Technology",
    },
    {
      num: 5,
      text: "Landing Pages",
    },
    {
      num: 4,
      text: "Major Projects",
    },
    {
      num: 100,
      text: "Project Completion",
    },
    {
      num: 9,
      text: "Project Deployment",
    },
  ];
  return (
    <>
      <div
        className="lg:h-[100vh] flex mt-4 sm:mt-12 lg:mt-0 overflow-hidden"
        ref={ref}
      >
        <div className="lg:w-[42%] xl:w-[48%] 2xl:w-[41%] h-[100vh] overflow-visible hidden lg:block">
          <img
            src={LeftImage}
            className="h-full w-auto overflow-visible object-contain"
          />
          {/*<div className="bg-[#34d399] h-full">.</div> */}
        </div>
        <div className="lg:w-[58%] xl:w-[52%] 2xl:w-[59%] py-8 lg:py-4 px-4 md:mx-16 lg:ml-0 md:flex md:flex-col md:justify-evenly custom_translate">
          <div>
            <div className="text-3xl 2xl:text-5xl lg:text-4xl font-bold flex">
              <div
                variants={cardVariantsLeft}
                className="after_underline relative"
              >
                ABOUT&nbsp;
              </div>
              <div
                variants={cardVariantsLeftForHeading}
                className="text-[#34d399]"
              >
                MY SELF
              </div>
            </div>
            <p className="pt-8 2xl:pr-16 xl:!leading-6 2xl:!leading-10 text-base 2xl:text-2xl">
              Experienced MERN Stack Developer with 2 year of expertise in
              ReactJS, NextJS, HTML, and CSS, complemented by secondary skills
              in NodeJS. Proficient in crafting visually appealing interfaces
              and implementing responsive design principles. Skilled in
              leveraging Material UI and Tailwind CSS to deliver seamless user
              experiences.
            </p>
          </div>

          <motion.ul
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            className="flex flex-wrap justify-between lg:-mx-8 lg:-mx-4 md:mt-8 lg:mt-0 xl:mt-2 2xl:mt-0 "
          >
            {companyDetails?.map((e, i) => {
              return (
                <motion.li
                  variants={cardVariantsBottom}
                  className="h-[120px] 2xl:h-[180px] xl:h-[160px] lg:h-[120px] w-[50%] md:w-[33%] 2xl:w-[33%] my-4 lg:my-2 2xl:my-4 px-2 lg:px-8 2xl:px-8 xl:px-3 lg:px-1 text-center"
                >
                  <div
                    className="h-full bg-white dark:bg-[#464444] flex flex-col items-center justify-center"
                    style={{ boxShadow: "0px 0 10px 1px #00000015" }}
                  >
                    {isInView ? (
                      <h2 className="text-[#34d399] text-3xl 2xl:text-5xl lg:text-4xl font-bold">
                        <CountUp end={e.num} duration={3} />
                        &nbsp;
                        <span>{`${i == 4 ? "%" : "+"}`}</span>
                      </h2>
                    ) : (
                      <></>
                    )}
                    <p className="text-lg 2xl:text-xl lg:text-base font-medium mt-4">
                      {e.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </>
  );
}
