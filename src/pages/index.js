import Landing from "@/components/homecomponents/landing";
import TransitionEffect from "@/components/transition";
import { useEffect } from "react";


export default function Home() {


  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, [])



  return (
    <>
      <TransitionEffect />
      <main className="dark:bg-black dark:text-zinc-50">
        <Landing />
        <div className="min-h-screen"></div>
        <div className="min-h-screen"></div>
      </main>
    </>
  )
}
