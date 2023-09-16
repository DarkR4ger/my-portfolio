'use client'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Magnetic from '../magnetic'


const CustomLinks = ({ href, title, className }) => {
  const router = useRouter()
  return (
    <Magnetic>
      <Link scroll={false} href={href} className={`relative group`}>
        {title}
        <div className={`absolute ${className} h-[7px] scale-0 group-hover:scale-100 w-[7px] -bottom-4 rounded-full group-hover:transition-all ease duration-500 bg-red-600 ${router.asPath === href ? 'scale-100' : 'scale-0'}`}></div>
      </Link>
    </Magnetic>
  )
}

export default CustomLinks
