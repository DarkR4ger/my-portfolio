
import Layout from "@/components/layouts/article";
import SlideTextUp from "@/components/slideuptext";
import { AnimatePresence } from "framer-motion";

export default function About() {
  let phrase = "This is project page"
  return (
    <Layout title='Projects'>
      <div className="text-4xl flex justify-center items-center min-h-screen mb-[100vh]">
        <AnimatePresence mode="wait">
          <SlideTextUp phrase={phrase} className='text-xl md:text-4xl font-light' />
        </AnimatePresence>
        Projects
      </div>
    </Layout>
  )
}
