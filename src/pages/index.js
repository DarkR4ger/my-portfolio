import About from "@/components/homecomponents/about";
import Landing from "@/components/homecomponents/landing";
import TransitionEffect from "@/components/transition";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <TransitionEffect />
      <main className="dark:bg-dark dark:text-light">
        <Landing />
        <About />
        <div className="min-h-screen"></div>
        <div className="min-h-screen"></div>
      </main>
    </>
  );
}
