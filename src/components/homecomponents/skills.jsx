import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { slideUp } from './aboutanim'
import SlideTextUp from "../slideuptext"
import Rounded from "../rounded"

function Box({ src, name, className, index }) {
  const desc = useRef(null)
  const isInView = useInView(desc)
  return (
    <motion.div ref={desc} className=" relative group flex flex-col justify-center items-center cursor-pointer bg-light dark:bg-dark h-24 md:h-32 p-4  sm:p-8 md:p-24 drop-shadow-xl shadow-2xl hover:shadow-red-500 tranistion duration-200 gap-1   overflow-hidden">
      <Image src={src} width={40} height={40} className="h-20 p-1 mt-2 md:w-20 md:h-28" alt={name} />
      <motion.p custom={index} variants={slideUp} initial='initial' animate={isInView ? 'open' : 'close'} className={`text-md md:text-xl group-hover:text-red-500 transition-colors duration-200 md:pt-8 whitespace-nowrap font-medium uppercase ${className}`}>{name}</motion.p>
    </motion.div>
  )
}

export default function Skill() {
  const phrase = "Skills I know"



  return (
    <div className="h-screen flex flex-col items-center">
      <div>
        <SlideTextUp phrase={phrase} mul={2} className="text-4xl md:text-7xl text-red-500" />
      </div>
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-5 gap-5 items-center">
        <Box src='/file-type-html.svg' name='HTML' index={10} />
        <Box src='/file-type-css.svg' name='css' index={15} />
        <Box src='/file-type-tailwind.svg' name='tailwind' index={20} />
        <Box src='/react.svg' name='react js' index={25} />
        <Box src='/js.svg' name='javascript' className='mb-3' index={30} />
        <Box src='/mysql.svg' name='Mysql' index={35} />
        <Box src='/nextjs-solid.svg' name='next js' index={40} />
        <Box src='/python.svg' name='python' index={45} />
        <Box src='/java.svg' name='java' index={50} />
      </div>
      <div className="mt-20 relative">
        <Rounded><Link href='/projects' className="relative z-10 font-medium transition duration-300 ">My projects</Link></Rounded>
      </div>
    </div>
  )
}
