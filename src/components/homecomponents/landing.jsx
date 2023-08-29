import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Picture from "../../../public/images/programming-animate.svg";


export default function Landing() {
  const wheel = useRef(null);
  const mouse = useRef(null);


  const { scrollYProgress } = useScroll({
    target: wheel.current,
    offset: ['start', 'end end']
  });
  const smooth = useSpring(scrollYProgress);
  const y = useTransform(smooth, [0, 1], [0, 300]);
  const strokeDashOffset = useTransform(smooth, [0, 1], [1000, 5000]);


  return (
    <div className="relative h-screen pt-20 flex flex-col overflow-hidden">
      <section className="h-full m-4 flex flex-col justify-center items-center md:flex-row">
        <div className="mt-10 text-center md:text-left">
          <div className="text-xl md:text-2xl">
            <p>
              Hi There!, I&apos;am{" "}
              <span className="text-red-500 font-semibold">Gowtham</span>
            </p>
          </div>
          <div className="text-xl md:text-4xl">
            <p>
              A Result&apos;s driven{" "}
              <span className="text-3xl md:text-6xl text-red-500 font-semibold">
                FrontEnd Engineer
              </span>
            </p>
          </div>
        </div>
        <div className="relative w-full h-full mt-20 md:mt-0 md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            priority
            src={Picture}
            alt="svg"
            fill={true}
            className="rounded-md"
          ></Image>
        </div>
      </section>
      <section className="relative flex flex-col justify-center items-center">
        <svg
          className="md:w-[41px] w-7"
          height={100}
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={1.5}
        >
          <motion.path
            style={{ translateY: y }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            ref={wheel}
            id="wheels"
            d="M123.359,79.775l0,72.843"
            fill="none"
            stroke="#EF4444"
            strokeWidth={20}
          />
          <motion.path
            ref={mouse}
            style={{ strokeDasharray: 560, strokeDashoffset: strokeDashOffset }}
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            fill="none"
            stroke="#EF4444"
            strokeWidth={20}
          />
        </svg>
      </section>
    </div>
  );
}
