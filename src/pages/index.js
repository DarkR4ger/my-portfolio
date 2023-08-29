import About from "@/components/homecomponents/about";
import Landing from "@/components/homecomponents/landing";
import Skill from "@/components/homecomponents/skills";
import Layout from "@/components/layouts/article";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Layout title='Home'>
      <Landing />
      <About />
      <Skill />
    </Layout>
  );
}
