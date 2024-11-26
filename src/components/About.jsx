import { ABOUT_TEXT } from "..";
import profilepic from "../assets/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="text-black my-20 text-center text-4xl">About Me</h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacit:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center h-full">
                    <img className="h-full max-h-[500px] w-auto object-cover rounded-lg" src={profilepic}  alt="about" />
                </div>                
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify:start items-center h-full">
                        <p className="text-black my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
        </div>
    </div>
  );
};

export default About
