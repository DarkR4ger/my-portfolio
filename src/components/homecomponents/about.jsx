import { motion, useInView } from "framer-motion";
import { slideUp } from "./aboutanim";
import { useRef } from "react";
export default function About() {
  const phrase =
    "I'am a passionate mechanical engineer turned aspiring frontend engineer. My journey began in the world of mechanical systems and design, where I honed my analytical thinking and problem-solving skills. However, as technology continued to reshape our world, I found myself increasingly drawn to the dynamic realm of frontend development.";
  const desc = useRef(null)
  const isInView = useInView(desc)
  return (
    <div className="container h-screen md:mt-[200px] mt-20 flex">
      <section ref={desc} className=" relative h-full m-2">
        <p className="relative text-2xl md:text-4xl font-light">
          {
            phrase.split(' ').map((word, index) => {
              return (
                <span key={index} className="relative inline-flex overflow-hidden mr-1">
                  <motion.span custom={index} variants={slideUp} initial='initial' animate={isInView ? 'open' : 'close'} className={`mr-1 ${index == 7 || index == 3 ? 'text-red-500 font-normal ' : ''}`} >{word}</motion.span>
                </span>
              )
            })
          }
        </p>
      </section>
    </div>
  );
}
