
import { gsap } from 'gsap/dist/gsap'
import { useEffect, useRef } from 'react'
import Magnetic from './magnetic'

export default function Rounded({ children, backgroundColor = '#ef4444', ...attributes }) {

  const circle = useRef(null)
  let timeline = useRef(null)
  let timeoutId = null

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(circle.current, { top: "-25%", width: '150%', duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: '125%', duration: 0.25 }, "exit")

  }, [])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div className="group rounded-2xl border-[1px] cursor-pointer relative flex items-center justify-center shadow-2xl p-[15px_60px_15px_60px] border-red-500" {...attributes} style={{ overflow: 'hidden' }} onMouseEnter={() => { manageMouseEnter() }} onMouseLeave={() => { manageMouseLeave() }}>
        {children}
        <div ref={circle} style={{ backgroundColor }} className="w-full h-[150%] absolute rounded-full top-full">
        </div>
      </div>
    </Magnetic>
  )
}
