import HtmlIcon from "../../assests/images/slide-6/html.png";
import CssIcon from "../../assests/images/slide-6/css.png";
import ReactIcon from "../../assests/images/slide-6/react.png";
import JQueryIcon from "../../assests/images/slide-6/jquery.png";
import NextIcon from "../../assests/images/slide-6/Next.js.svg";

import NodeIcon from "../../assests/images/slide-6/node.png";
import ExpressJs from "../../assests/New Images/tech/expresslogo.png";
import JavaScript from "../../assests/New Images/tech/js.png";
import Nest from "../../assests/New Images/tech/nest.png";

import MongoDbIcon from "../../assests/images/slide-6/mongodb.png";
import PostgreSQLIcon from "../../assests/images/slide-6/pgsql.svg";
import FireBase from "../../assests/New Images/tech/firebase.png";

import AwsIcon from "../../assests/images/slide-6/aws.png";

import Figma from "../../assests/images/slide-6/figma.png";
import Postman from "../../assests/images/slide-6/postman-logo.svg";

import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { container, item } from "../../components/animations";

const Box = ({ isInView }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="block md:hidden w-[95%] sm:w-[90%] mx-auto mb-12">
        <Slider {...settings}>
          <div className="md:w-[45%] lg:w-[30%] my-2">
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-3xl text-white text-center py-2 2xl:py-4">
              Front-end
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={HtmlIcon}
                    alt="Html"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap cursor-pointer">
                    HTML
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={CssIcon}
                    alt="Css"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    CSS
                  </p>
                </div>
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={ReactIcon}
                    alt="React"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    React.Js
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={NextIcon}
                    alt="Next"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Next.Js
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[45%] lg:w-[30%] my-2">
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Back-end
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={JavaScript}
                    alt="Ruby"
                    className="mx-auto grayscale h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap  grayscale">
                    JavaScript
                  </p>
                </div>
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={NodeIcon}
                    alt="Node"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Node.Js
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={ExpressJs}
                    alt="Ruby"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Express Js
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={Nest}
                    alt="Ruby"
                    className="mx-auto grayscale h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Nest
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[45%] lg:w-[30%] my-2">
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Database
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={MongoDbIcon}
                    alt="MongoDb"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    MongoDB
                  </p>
                </div>
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={PostgreSQLIcon}
                    alt="PostgreSQL"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    PostgreSQL
                  </p>
                </div>{" "}
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={FireBase}
                    alt="PostgreSQL"
                    className="mx-auto grayscale h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    FireBase
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[45%] lg:w-[30%] my-2">
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Tools
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={Postman}
                    alt="Postman"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto filter grayscale"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Postman
                  </p>
                </div>
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={Figma}
                    alt="Figma"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Figma
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[45%] lg:w-[30%] my-2">
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Cloud
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={AwsIcon}
                    alt="AWS"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    AWS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="hidden md:block">
        <motion.ul
          className="flex flex-wrap justify-evenly"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.li
            variants={item}
            className="md:w-[45%] lg:w-[30%] my-2 hover:!scale-[1.1] transition duration-300"
          >
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-3xl text-white text-center py-2 2xl:py-4">
              Front-end
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={HtmlIcon}
                    alt="Html"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap cursor-pointer">
                    HTML
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={CssIcon}
                    alt="Css"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    CSS
                  </p>
                </div>
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={ReactIcon}
                    alt="React"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    React.Js
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={NextIcon}
                    alt="Next"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Next.Js
                  </p>
                </div>
              </div>
            </div>
          </motion.li>

          <motion.li
            variants={item}
            className="md:w-[45%] lg:w-[30%] my-2 hover:!scale-[1.1] transition duration-300"
          >
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Back-end
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={JavaScript}
                    alt="Ruby"
                    className="mx-auto grayscale h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap  grayscale">
                    JavaScript
                  </p>
                </div>
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={NodeIcon}
                    alt="Node"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Node.Js
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={ExpressJs}
                    alt="Ruby"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Express Js
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={Nest}
                    alt="Ruby"
                    className="mx-auto grayscale h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Nest
                  </p>
                </div>
              </div>
            </div>
          </motion.li>

          <motion.li
            variants={item}
            className="md:w-[45%] lg:w-[30%] my-2 hover:!scale-[1.1] transition duration-300"
          >
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Database
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={MongoDbIcon}
                    alt="MongoDb"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    MongoDB
                  </p>
                </div>
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={PostgreSQLIcon}
                    alt="PostgreSQL"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    PostgreSQL
                  </p>
                </div>{" "}
                <div class="col-span-2 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={FireBase}
                    alt="PostgreSQL"
                    className="mx-auto grayscale h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    FireBase
                  </p>
                </div>
              </div>
            </div>
          </motion.li>

          <motion.li
            variants={item}
            className="md:w-[45%] lg:w-[30%] my-2 hover:!scale-[1.1] transition duration-300"
          >
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Tools
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={Figma}
                    alt="Figma"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Figma
                  </p>
                </div>
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={Postman}
                    alt="Postman"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto filter grayscale"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    Postman
                  </p>
                </div>
              </div>
            </div>
          </motion.li>

          <motion.li
            variants={item}
            className="md:w-[45%] lg:w-[30%] my-2 hover:!scale-[1.1] transition duration-300"
          >
            <div className="bg-[#34d399] text-xl lg:text-base xl:text-xl xl:text-3xl text-white text-center py-2 2xl:py-4">
              Cloud
            </div>
            <div className="shadow_slide6 p-1 dark:bg-[#464444]">
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-1 bg-[#F5F6F9] py-8 md:py-4 lg:py-2 xl:py-4 2xl:py-6">
                  <img
                    src={AwsIcon}
                    alt="AWS"
                    className="mx-auto h-[26px] sm:h-[34px] md:h-[20px] 2xl:h-[34px] w-auto"
                  />
                  <p className="text-sm 2xl:text-base text-[#333] font-medium text-center mt-6 md:mt-2 2xl:mt-6 whitespace-nowrap">
                    AWS
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};

export default Box;
