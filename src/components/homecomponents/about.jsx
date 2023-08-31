import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SlideTextUp from "../slideuptext";
import Rounded from "../rounded";
import Link from "next/link";


let xPercent = 0
let direction = -1

export default function About() {
  const phrase =
    "I'am a passionate mechanical engineer turned aspiring frontend engineer. My journey began in the world of mechanical systems and design, where I honed my analytical thinking and problem-solving skills. However, as technology continued to reshape our world, I found myself increasingly drawn to the dynamic realm of frontend development.";
  const ftext = useRef(null)
  const stext = useRef(null)
  const slider = useRef(null)

  let animationFrameId = useRef(null);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    }
    else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(ftext.current, { xPercent: xPercent })
    gsap.set(stext.current, { xPercent: xPercent })
    animationFrameId.current = requestAnimationFrame(animate)
    xPercent += 0.1 * direction;
  }

  useLayoutEffect(() => {
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
    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    }

  }, [])



  return (
    <div className="min-h-screen md:mt-[200px] mt-10 flex flex-col">
      <SlideTextUp phrase={phrase} className='text-xl md:text-4xl font-light' />
      <section className="mt-[50px] md:mt-[100px] relative  flex text-red-500 text-[80px] md:text-[200px] overflow-hidden ">
        <div ref={slider} className="relative whitespace-nowrap ">
          <p ref={ftext} className="relative uppercase pr-[50px]">Love what you do -</p>
          <p ref={stext} className="absolute left-full top-0 uppercase pr-[50px] m-0">love what you do -</p>
        </div>
      </section>
      <div className="relative flex items-center justify-center md:mt-[100px]">
        <Rounded><Link className="relative z-10" href='/about'>About me</Link></Rounded>
      </div>
    </div>
  );
}
