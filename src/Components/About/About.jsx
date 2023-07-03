import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'
import {fadeIn} from '../../Variants/Variants'
import pic2 from "../../assets/port2-modified.png";
import CountUp from "react-countup";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section font-mono" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div 
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}} 
           className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top ">
            <img className="py-40 ms-10 lg:ms-40" src={pic2} alt="" width="300" />
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}} 
           className="flex-1">
            <h2 className="h2 text-gradient">About Me</h2>
            <h3 className="h3 mb-4 text-white">
              Being a tech enthusiast it is really a dream of mine to be a part of
              this tech industry.
            </h3>
            <p className="mb-6">
              Hello. I am Joyee chakraborty. Currently pursuing my computer
              science and engineering degree from leading university. As a child
              i was so inquisitive about every new thing. That nature of mine
              inspire me today to learn new things. For me adapting to a new
              technology is easier than settling in a new environment. According
              to <span className="font-bold">Eleanor Roosevelt,</span> Great minds discuss ideas; average minds
              discuss events; small minds discuss people. And I believe in this
              digital era, ideas on technology can create something bigger.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div>
                    <div className="text-[40px] font-mono text-gradient mb-2">
                    {
                        inView?
                        <CountUp start={0} end={10} duration={5}/> :
                        null
                        }
                    </div>
                    <div className="font-mono text-sm tracking-[2px]">
                        Months of <br />
                        Experience
                    </div>
                </div>
            </div>
            <div className="flex gap-x-8 items-center">
            <button className="btn btn-lg text-black">Contact Me</button>
            <a href="#" className=" text-gradient ">My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
