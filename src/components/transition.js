import { AnimatePresence, motion } from "framer-motion";
import { ExitSlide, ExitSlideSep, SlideIn, SlideNom } from "./transanim";
import { useRouter } from "next/router";

function ExitSlideContainer({ index }) {
  return (
    <motion.div
      custom={index}
      variants={ExitSlideSep}
      initial='initial'
      exit='exit'
      className={`relative top-full z-[60] w-[25%] h-screen border-2 border-red-500 bg-black`}
    ></motion.div>
  );
}

function SlideContainer({ index }) {
  return (
    <motion.div
      custom={index}
      variants={SlideIn}
      initial='initial'
      animate='enter'
      className={`relative -top-full z-[60] w-[25%] border-2 border-red-500 h-screen bg-black`}
    ></motion.div>
  );
}
const TransitionEffect = () => {
  const router = useRouter()

  const title = (r) => {
    switch (r) {
      case '/':
        return 'Home'
      case '/about':
        return 'About'
      case '/projects':
        return 'Projects'
      case '/contact':
        return 'Contact'
    }
  }

  return (
    <>
      <motion.div
        variants={SlideNom}
        initial="initial"
        animate="enter"
        className="fixed -top-full h-screen w-screen z-[50] bg-transparent flex justify-center items-center"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-100%', opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="absolute z-[70] text-4xl font-medium bg-gradient-to-b from-light to-dark bg-clip-text text-transparent">{title(router.asPath)}</motion.div>
        <SlideContainer index={2} />
        <SlideContainer index={4} />
        <SlideContainer index={6} />
        <SlideContainer index={8} />
      </motion.div>
      <motion.div
        variants={ExitSlide}
        exit='exit'
        className="fixed top-full h-screen w-screen z-[40] bg-transparent flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          className="absolute text-4xl font-medium  z-[70] bg-gradient-to-b from-light to-dark bg-clip-text text-transparent">{title(router.asPath)}</motion.div>
        <ExitSlideContainer index={2} />
        <ExitSlideContainer index={4} />
        <ExitSlideContainer index={6} />
        <ExitSlideContainer index={8} />
      </motion.div>
    </>
  );
};

export default TransitionEffect;
