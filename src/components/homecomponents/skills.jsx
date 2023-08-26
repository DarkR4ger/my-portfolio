import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { slideUp } from './aboutanim'

function Box({ src, name, className, index }) {
  const desc = useRef(null)
  const isInView = useInView(desc)
  return (
    <motion.div ref={desc} className=" relative group flex flex-col justify-center items-center cursor-pointer bg-light dark:bg-dark h-32 p-4 sm:p-14 md:p-24 drop-shadow-xl shadow-2xl hover:shadow-red-500 tranistion duration-200  gap-4 overflow-hidden">
      <Image src={src} width={70} height={70} className="md:w-20 md:h-20" alt={name} />
      <motion.p custom={index} variants={slideUp} initial='initial' animate={isInView ? 'open' : 'close'} className={`text-md md:text-xl group-hover:text-red-500 transition-colors duration-200 pt-2 md:pt-7 font-medium uppercase ${className}`}>{name}</motion.p>
    </motion.div>
  )
}

export default function Skill() {



  return (
    <div className="container h-screen  flex flex-col items-center">
      <div>
        <h2 className="text-4xl md:text-7xl text-red-500">Skills I Know</h2>
      </div>
      <div className=" relative mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 items-center">
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
    </div>
  )
}
