import { HERO_CONTENT } from ".."
import profilepic from "../assets/profilepic.jpg";
import { motion } from "framer-motion";
const container=(delay)=>({
  hidden:{x:-100,opqcity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="text-black pb-16 text-5xl font tracking-tight lg:mt-1 lg:text-8xl">Aastha Jain</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Developer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="text-black my-2 max-w-xl py-6 font-light tracking-tighter">{ HERO_CONTENT }</motion.p>
                </div>
            </div>
            <div className="w-full; lg:w-1/2 lg:p-8 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="flex justify-center lg:justify-end">
               <motion.img initial={{x:100,opacity:0}} 
               animate={{x:0,opacity:1}}
               transition={{duration:1,delay:1.2}}src={profilepic} alt="Aastha Jain" className="h-full max-h-96 object-cover" />
            </div>
            </div>
        </div>
    </div>
  );
};

export default Hero
