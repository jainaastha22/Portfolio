import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiDjango, SiMysql, SiPostgresql, SiGit, SiPython } from "react-icons/si";
import { FaGithub, FaJava, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-black my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <div className="space-y-10">

        {/* Programming */}
        <div>
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="text-black mb-6 text-center text-3xl"
          >
            Programming
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiPython className="text-7xl" color="#3776AB" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaJava className="text-7xl" color="#007396" />
            </motion.div>
            <motion.div
              variants={iconVariants(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiJavascript className="text-7xl" color="#F7DF1E" />
            </motion.div>
          </motion.div>
        </div>

        {/* Web Development */}
        <div>
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="text-black mb-6 text-center text-3xl"
          >
            Web Development
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiHtml5 className="text-7xl" color="#E34F26" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiCss3 className="text-7xl" color="#1572B6" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiReactjsLine className="text-7xl" color="#61DBFB" />
            </motion.div>
            <motion.div
              variants={iconVariants(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiDjango className="text-7xl" color="#092E20" />
            </motion.div>
          </motion.div>
        </div>

        {/* Tools and Databases */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Tools */}
          <div className="flex-1 lg:max-w-[45%]">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="text-black mb-6 text-center text-3xl"
            >
              Tools
            </motion.h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiGit className="text-7xl" color="#F05032" />
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaGithub className="text-7xl" color="#181717" />
              </motion.div>
            </motion.div>
          </div>

          {/* Databases */}
          <div className="flex-1 lg:max-w-[45%]">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="text-black mb-6 text-center text-3xl"
            >
              Databases
            </motion.h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiMysql className="text-7xl" color="#4479A1" />
              </motion.div>
              <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiPostgresql className="text-7xl" color="#336791" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* AWS Services */}
        <div>
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="text-black mb-6 text-center text-3xl"
          >
            AWS Services
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaCloud className="text-7xl" color="#FF9900" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
