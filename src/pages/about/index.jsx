import Layout from "@/components/layouts/article";
import SlideTextUp from "@/components/slideuptext";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";


export default function About() {
  let phrase = "This is about page"


  return (
    <Layout title='About'>
      <div className="text-4xl flex justify-center items-center min-h-screen mb-[100vh]">
        <AnimatePresence mode="wait">
          <SlideTextUp phrase={phrase} className='text-xl md:text-4xl font-light' />
        </AnimatePresence>
        About
      </div>
    </Layout>
  )
}
