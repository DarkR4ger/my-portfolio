import { useEffect, useRef } from "react";
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


let xPercent = 0
let direction = -1

export default function Landing() {

  // const firstText = useRef(null);
  // const secondText = useRef(null);
  // const slider = useRef(null);
  const wheel = useRef(null)
  const mouse = useRef(null)


  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger)
    // gsap.to(slider.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     scrub: 0.5,
    //     start: 0,
    //     end: window.innerHeight,
    //     onUpdate: e => direction = e.direction * -1
    //   },
    //   x: '-200px',
    // })
    // requestAnimationFrame(animate)
    //

  }, [])

  const { scrollYProgress } = useScroll({
    target: wheel.current,
    smooth: 1
  })
  const smooth = useSpring(scrollYProgress)
  const y = useTransform(smooth, [0, 1], [0, 300])
  const strokeDashOffset = useTransform(smooth, [0, 1], [1000, 2000])

  // const animate = () => {
  //   if (xPercent < -100) {
  //     xPercent = 0
  //   }
  //   else if (xPercent > 0) {
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, { xPercent: xPercent })
  //   gsap.set(secondText.current, { xPercent: xPercent })
  //   requestAnimationFrame(animate)
  //   xPercent += 0.1 * direction
  // }





  return (
    <div className="container relative h-screen pt-20 flex flex-col overflow-hidden">
      <section className="h-full flex flex-col justify-center items-center md:flex-row">
        <div className="">
          <div className="text-xl">
            <p>Hi There!, I'am <span className="text-red-500 font-semibold">Gowtham</span></p>
          </div>
          <div className="text-xl">
            <p>A Result's driven <span className="text-3xl text-red-500 font-semibold">FrontEnd Engineer</span></p>
          </div>
        </div>
        <div>
          <Image priority src='/images/programming-animate.svg' alt='svg' width={300} height={300} className="md:w-[250] md:h-[250] w-150 h-150" ></Image>
        </div>
      </section>
      <section className="relative flex flex-col justify-center items-center">
        {/*<div className="absolute -top-[290px]">
          <div ref={slider} className="relative whitespace-nowrap">
            <p ref={firstText} className="relative m-0 text-red-500 text-[200px] font-medium pr-[50px]">Love What You Do -</p>
            <p ref={secondText} className="absolute left-full top-0 m-0 text-red-500 text-[200px] font-medium pr-[50px]">Love What You Do -</p>
          </div>

        </div>*/}
        <svg className="md:w-[41px] w-7" height={100} viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fillRule="evenodd" clipRule='evenodd' strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1.5} >
          <motion.path style={{ translateY: y }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} ref={wheel} id="wheels" d="M123.359,79.775l0,72.843" fill="none" stroke="#EF4444" strokeWidth={20} />
          <motion.path ref={mouse} style={{ strokeDasharray: 50, strokeDashoffset: strokeDashOffset }} id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" fill="none" stroke="#EF4444" strokeWidth={20} />
        </svg>
      </section >
    </div >
  )

}
