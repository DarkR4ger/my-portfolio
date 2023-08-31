import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Outfit } from "next/font/google"
import CustomLinks from "./links"
import Nav from "./nav"
import { useState, useRef, useLayoutEffect } from "react"
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ThemeButton from "../themebutton"
import Magnetic from "../magnetic"
import useThemeSwitcher from "../hooks/useThemeSwitcher"
import Rounded from "../rounded"

const outfit = Outfit({ subsets: ['latin'] })


export default function Header() {
  const ref = useRef(null);
  const Href = useRef(null);

  const [isClicked, setIsClicked] = useState(false);
  const [mode, setMode] = useThemeSwitcher()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: Href.current,
        onLeave: () => { gsap.to(ref.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
        onEnterBack: () => { gsap.to(ref.current, { scale: 0, duration: 0.25, ease: "power1.out" }) },
      },
    })
  }, [])


  return (
    <header ref={Href} className={` dark:text-zinc-50 absolute top-0 w-full z-[1] ${outfit.className} p-6 flex justify-between items-center `}>
      <div className="container flex justify-between items-center">
        <Magnetic>
          <div className="flex items-center font-semibold gap-2 group">
            <Link href='/' className="text-xl">
              <svg className="group-hover:rotate-180 group-hover:fill-red-400 transition-all ease-linear duration-300" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path className='group-hover:fill-red-500 dark:fill-zinc-50 transition-colors duration-300' fill="currentColor" d="M277.95 333.754c-18.707 5.27-39.12 3.777-57.213-5.024c-8.2 15.105-12.253 34.398-14.837 55.104L24.977 477.958c41.176-120.353 94.123-176.934 153.265-200.01c-5.278-18.693-3.76-39.107 5.024-57.207c-15.113-8.19-34.397-12.236-55.12-14.843L34.038 24.973c120.345 41.192 176.92 94.13 199.987 153.273c18.7-5.27 39.115-3.753 57.214 5.008c8.215-15.09 12.253-34.374 14.844-55.112l180.94-94.116c-41.193 120.37-94.148 176.95-153.29 200.02c5.27 18.7 3.777 39.113-5.016 57.213c15.113 8.215 34.398 12.236 55.112 14.828l94.14 180.94c-120.392-41.208-176.95-94.132-200.02-153.274zm-16.66-36.538c22.752-2.916 38.837-23.756 35.922-46.51c-2.924-22.768-23.74-38.83-46.517-35.922c-22.745 2.916-38.83 23.733-35.907 46.493c2.908 22.76 23.733 38.846 46.5 35.94z" /></svg>

            </Link>
            <h1>
              <Link href='/' className="relative text-xl dark:text-zinc-50 max-[500px]:hidden">
                Gowtham S
              </Link>
            </h1>
          </div>
        </Magnetic>
        <nav className="hidden md:flex justify-center items-center gap-4 font-normal">
          <CustomLinks href="/about" title='About' className='left-[50%]' />
          <CustomLinks href="/projects" title='Projects' className='left-[50%]' />
          <CustomLinks href="/contact" title='Contact' className='left-[50%]' />
          <Magnetic>
            <ThemeButton mode={mode} setMode={setMode} />
          </Magnetic>
        </nav>
        <div className="md:hidden">
          <ThemeButton mode={mode} setMode={setMode} />
        </div>
        <div className="md:hidden cursor-pointer flex items-center gap-2">
          <div className="h-[7px] w-[7px] rounded-full bg-red-600"></div>
          <div onClick={() => setIsClicked(!isClicked)}>Menu</div>
        </div>
        <div ref={ref} onClick={() => setIsClicked(!isClicked)} className={`fixed flex flex-col scale-0 gap-1 justify-center items-center m-5 p-2 right-0 md:right-10 h-14 w-14 cursor-pointer drop-shadow-xl shadow-2xl  rounded-full bg-gray-900 dark:bg-light z-20 group ${isClicked ? 'bg-red-500 dark:bg-red-500  ' : ''} overflow-hidden `}>
          <Rounded className={`h-20 w-20 rounded-full flex flex-col items-center justify-center gap-1 p-4  `}>
            <span className={`relative  z-30 h-[1px] w-[50%] bg-zinc-50 dark:bg-black ${isClicked ? 'rotate-45 top-[2px]' : ''} transition-transform ease-linear duration-200`}></span>
            <span className={`relative z-30 h-[1px] w-[50%] bg-zinc-50 dark:bg-black ${isClicked ? '-rotate-45 -top-[3px]' : ''} transition-transform ease-linear duration-200`}></span>
          </Rounded>
        </div>

        <AnimatePresence mode='wait'>
          {isClicked && <Nav setIsClicked={setIsClicked} mode={mode} setMode={setMode} />}
        </AnimatePresence>
      </div>
    </header>
  )
}
