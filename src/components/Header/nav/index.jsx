import CustomLinks from "../links"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { MenuSlideIn, SlideIn } from "./anim"
import ThemeButton from "@/components/themebutton"
import Magnetic from "@/components/magnetic"
import Curve from "@/components/curve"
import Link from "next/link"
import Rounded from "@/components/rounded"


const NavLinks = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/projects',
    title: 'Projects'
  },
  {
    href: '/contact',
    title: 'Contact'
  },
]


export default function Nav({ setIsClicked, mode, setMode }) {
  return (
    <motion.div variants={MenuSlideIn} initial='initial' animate='enter' exit='exit' className="fixed z-[70] bg-dark text-zinc-50 dark:text-dark dark:bg-light right-0 bottom-0 h-screen w-screen sm:w-[300px]">
      <div className="box-border h-full flex flex-col justify-between items-center p-4 ">
        <div className="flex flex-col items-center gap-4">
          <p className="pt-20 text-3xl">Navigation</p>
          <Rounded>
            <a href="/Gowtham_S.pdf" download="Gowtham_S.pdf" className=" flex items-center gap-2 z-[1] font-semibold">Resume
              <Icon className="text-light dark:text-dark z-[1] text-xl" icon="line-md:download-outline-loop" />
            </a>
          </Rounded>
        </div>
        <nav className="flex flex-col text-3xl gap-4  justify-center">
          {NavLinks.map((nav, index) => {
            return (
              <motion.div key={index} variants={SlideIn} initial='initial' animate='enter' exit='exit' custom={index} onClick={() => setIsClicked(false)} className="">
                <CustomLinks className={'-left-5 top-[50%]'} href={nav.href} title={nav.title} />
              </motion.div>
            )
          })}

        </nav>
        <div className="flex group items-center justify-between gap-4 text-3xl">
          <Magnetic>
            <Link target="_blank" href="https://twitter.com/GowthamS72269" scroll={false}>
              <Icon icon='line-md:twitter-twotone' className="cursor-pointer" color="#1D9BF0" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link target="_blank" href="https://github.com/Gowth4m-S" scroll={false}>
              <Icon icon="line-md:github-twotone" className="cursor-pointer" color="red" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link target="_blank" href="https://linkedin.com/in/gowtham-s-059b281a1" scroll={false}>
              <Icon icon="line-md:linkedin" className="cursor-pointer" color="#1d9bf0 " />
            </Link>
          </Magnetic>
          <Magnetic>
            <ThemeButton mode={mode} setMode={setMode} />
          </Magnetic>
        </div>
      </div>
      <Curve />

    </motion.div>
  )
}
