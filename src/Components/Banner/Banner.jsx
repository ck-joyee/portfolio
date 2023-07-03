import { TypeAnimation } from "react-type-animation";
import pic from "../../assets/port.2.jpg";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants/Variants";

const Banner = () => {
  return (
    <section className="section font-mono" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 items-center ms-10 me-10">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[1.5] lg:text-[70px] text-white"
            >
              Joyee <span>Chakraborty</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[40px] font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Front-End Developer!!!",
                  "Programming Instructor!!!",
                ]}
                speed={0}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-white"
            >
              A Tech Enthusiast who is currently scrutinizing Web Development. I
              have worked as a Programming Instructor at Cybernetics Robo
              Academy. I am also pursuing my B.Sc in Computer Science &
              Engineering.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://drive.google.com/file/d/1xVgAkZclUiE2FJrmC0tUj0_ugqhstp3h/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                 <button className="btn hover  text-white ">Resume</button>
              </a>

              <a href="#" className="text-gradient">
                Portfolio
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/ck-joyee">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/joyee-chakraborty-8b5b50229">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/joyee.chakraborty.9822?mibextid=ZbWKwL">
                <FaFacebook />
              </a>
            </motion.div>
          </div>
         
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
          >
            <img
              width="350"
              height="100"
              className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] rounded-xl"
              src={pic}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
