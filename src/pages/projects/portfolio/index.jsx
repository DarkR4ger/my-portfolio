import Layout from "@/components/layouts/article";
import Rounded from "@/components/rounded";
import Link from "next/link";
const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <div className="min-h-screen flex flex-col mx-4 pt-[100px]">
        <h1 className="text-4xl md:text-6xl text-center text-red-500">Portfolio</h1>
        <div className="mt-[100px] flex flex-col items-center md:flex-row gap-10 w-full">
          <div className="w-[70%]">
            <p className="text-2xl md:text-4xl text-center md:text-left">A portfolio about me and my projects<span className="ml-2">&#128522;</span></p>
          </div>
          <div className="">
            <Rounded>
              <Link href="/" target="_blank" scroll={false} className="md:text-4xl text-2xl z-[1]" >Live Site <span className="md:ml-2 md:text-2xl">&#8599;</span></Link>
            </Rounded>
          </div>
        </div>
        <div className="md:text-3xl text-xl mt-[100px] flex flex-col ">
          <div className="flex ">
            <ul className="">
              <li className="font-bold p-2 text-red-500">Stack Used <span>&#58;</span>
              </li>
              <ul className="list-disc pl-20 text-2xl">
                <li>Next Js</li>
                <li>Tailwindcss</li>
                <li>GSAP</li>
                <li>Framer Motion</li>
                <li>Locomotive Scroll</li>
              </ul>
            </ul>
          </div>


        </div>
      </div>

    </Layout>
  );
};

export default Portfolio;
