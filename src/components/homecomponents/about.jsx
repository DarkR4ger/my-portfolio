import { motion, useInView } from "framer-motion";
import { slideUp, slider } from "./aboutanim";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


let xPercent = 0
let direction = -1

export default function About() {
  const phrase =
    "I'am a passionate mechanical engineer turned aspiring frontend engineer. My journey began in the world of mechanical systems and design, where I honed my analytical thinking and problem-solving skills. However, as technology continued to reshape our world, I found myself increasingly drawn to the dynamic realm of frontend development.";
  const desc = useRef(null)
  const ftext = useRef(null)
  const stext = useRef(null)
  const slider = useRef(null)
  const isInView = useInView(desc)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px"
    })
    requestAnimationFrame(animate)

  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    }
    else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(ftext.current, { xPercent: xPercent })
    gsap.set(stext.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction;
  }


  return (
    <div className="container h-screen md:mt-[200px] mt-10 flex flex-col">
      <section ref={desc} className=" relative m-2">
        <p className="relative text-xl md:text-4xl font-light">
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
      <section className="mt-[50px] relative  flex text-red-500 text-[80px] md:text-[200px] overflow-hidden ">
        <div ref={slider} className="relative whitespace-nowrap ">
          <p ref={ftext} className="relative uppercase pr-[50px]">Love what you do -</p>
          <p ref={stext} className="absolute left-full top-0 uppercase pr-[50px] m-0">love what you do -</p>
        </div>
      </section>
    </div>
  );
}