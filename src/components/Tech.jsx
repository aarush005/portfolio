import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { ImHtmlFive2 } from "react-icons/im";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { SiAppwrite } from "react-icons/si";


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

const Tech = () => {
  return (
    <>
      <motion.div className="mt-11" variants={textVariant()}>
        <p className={styles.sectionSubText}>
           Technologies I worked with
        </p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>

      {/* <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technologies) => (
        <div className="w-28 h-28" key={technologies.name}>
          <BallCanvas icon={technologies.icon}/>
        </div>
      ))}
    </div> */}

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-11 mb-11"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <ImHtmlFive2 className="text-7xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <SiTailwindcss className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <SiMysql className="text-7xl text-[#086690]" />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-11 mb-11"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <RiPhpFill className="text-7xl text-[#7b7fb5]" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <TbBrandTypescript className="text-7xl text-[#377cc8]" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-gradient shadow-card p-8"
        >
          <SiAppwrite className="text-7xl text-[#fd3c73]" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
