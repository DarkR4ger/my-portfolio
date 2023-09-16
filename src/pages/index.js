import About from "@/components/homecomponents/about";
import Landing from "@/components/homecomponents/landing";
import Skill from "@/components/homecomponents/skills";
import Layout from "@/components/layouts/article";

export default function Home() {
  return (
    <Layout title='Home'>
      <Landing />
      <About />
      <Skill />
    </Layout>
  );
}
