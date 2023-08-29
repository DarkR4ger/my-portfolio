
import { motion, useInView } from 'framer-motion'
import { slideUp } from './homecomponents/aboutanim'
import { useRef } from 'react'


export default function SlideTextUp({ phrase, className, mul = 1 }) {
  const desc = useRef(null)
  const isInView = useInView(desc)

  return (
    <section ref={desc} className='relative'>
      <p className={`relative ${className}`}>
        {
          phrase.split(' ').map((word, index) => {
            return (
              <span key={index} className='relative inline-flex overflow-hidden mr-1' >
                <motion.span custom={index * mul} variants={slideUp} initial='initial' animate={isInView ? 'open' : 'close'} className={`mr-1 ${index == 7 || index == 3 ? 'text-red-500 font-normal' : ''}`}>
                  {word}
                </motion.span>
              </span>
            )
          })
        }

      </p>
    </section>
  )
}
