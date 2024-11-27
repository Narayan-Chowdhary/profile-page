import Logo from "../../assests/logo/Logo.JPG";
import FrontImage from "../../assests/New Images/contact/dev.jpg";
import { Box, Typography, Grid } from "@mui/material";
import TelIcon from "../../assests/images/slide1/contactIcon.png";
import emailIcon from "../../assests/images/slide1/emailIcon.png";
import Linkedin from "../../assests/images/slide1/linkedin.png";
import {
  container,
  item,
  cardVariantsBottomWithDelay,
  cardVariantsLeftForHeading,
} from "../../components/animations";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Slide1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <div className="relative" ref={ref}>
        <Box
          sx={{
            display: "block",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              mb: 10,
              justifyContent: "start",
              ml: { xs: 6, md: 15 },
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "start", md: "start" },
                  my: 6,
                }}
              >
                <img src={Logo} alt="Logo" width="120px" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "center" },
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xl: 8,
                      lg: 1,
                      xs: 0,
                    },
                  }}
                >
                  <motion.ul
                    className="flex flex-col justify-between"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.div
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: false, amount: 0.8 }}
                    >
                      <motion.div variants={cardVariantsLeftForHeading}>
                        <Box
                          sx={{
                            pb: 4,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#34d399",
                              boxShadow:
                                " 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                              width: "fit-content",
                              p: 1,
                              px: 2,
                            }}
                            className="dark:bg-[#464444]"
                          >
                            Portfolio
                          </Typography>
                        </Box>
                      </motion.div>
                    </motion.div>

                    <motion.li variants={item}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          lineHeight: "0.4",
                          fontSize: { xs: "5vw", md: "3vw" },
                        }}
                        className="text-[#808080] dark:text-[#fff] text-sm"
                      >
                        Software Developer
                      </Typography>
                    </motion.li>

                    <motion.li variants={item}>
                      <Typography
                        sx={{
                          color: "#34d399",
                          fontSize: { xs: "8vw", md: "5vw" },
                          ml: "-4px",
                        }}
                      >
                        <b>Narayan</b>
                      </Typography>
                    </motion.li>

                    <motion.li variants={item}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 500,
                          lineHeight: "0.4",
                          fontSize: { xs: "5vw", md: "3vw" },
                        }}
                        className="text-[#808080] dark:text-[#fff]"
                      >
                        MERN Stack Developer
                      </Typography>
                    </motion.li>
                    <motion.div
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.8 }}
                    >
                      <motion.div variants={cardVariantsBottomWithDelay}>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: { xs: "3vw", md: "1.5vw" },
                            mt: {
                              xl: 6,
                              md: 3,
                              xs: 6,
                            },
                            borderTop: "1px solid",
                            mb: 2,
                            display: "inline-flex",
                          }}
                          className="text-[#808080] dark:text-[#fff]"
                        >
                          Exprtise in MERN Stack Development
                        </Typography>
                      </motion.div>
                    </motion.div>
                  </motion.ul>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "inline" },
              }}
            >
              <img
                src={FrontImage}
                className="w-[40%] 2xl:w-[45%] h-[90%]"
                alt=""
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Grid
          container
          rowSpacing={{ xs: 0, sm: 2, md: 3 }}
          sx={{
            mr: 1,

            position: { xs: "absolute" },
            bottom: { xs: "0%" },
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              background:
                "transparent linear-gradient(271deg, #34d399 0%, #34d399 68%, #34d399 100%) 0% 0% no-repeat padding-box",
              opacity: 0.99,
              pl: { xs: 0, md: 5 },
              textAlign: { xs: "center", md: "start" },
              py: 2,
              borderRight: "1px solid black",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={TelIcon} alt="" className="mr-2" />
              <a
                href="https://wa.me/+916269090901"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                +91 9723973229
              </a>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              background:
                "transparent linear-gradient(271deg, #34d399 0%, #34d399 68%, #34d399 100%) 0% 0% no-repeat padding-box",
              opacity: 0.99,
              pl: { xs: 0, md: 5 },
              textAlign: { xs: "center", md: "start" },
              py: 2,
              justifyContent: "center",
              borderRight: "1px solid black",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={emailIcon} alt="" className="mr-2" />
              <a
                href="mailto:narayan97.nk@gmail.com"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                narayan97.nk@gmail.com
              </a>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              background:
                "transparent linear-gradient(271deg, #34d399 0%, #34d399 68%, #34d399 100%) 0% 0% no-repeat padding-box",
              opacity: 0.99,
              pl: { xs: 0, md: 5 },
              textAlign: { xs: "center", md: "start" },
              py: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={Linkedin}
                alt=""
                className="mr-2 filter invert brightness-0 saturate-100"
              />
              <a
                href="www.linkedin.com/in/narayan-chowdhary-378689251"
                target="blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                LinkedIn
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
