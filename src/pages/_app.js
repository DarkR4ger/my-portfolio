import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Outfit } from 'next/font/google'
import { useRouter } from 'next/router'
import MainLayout from '@/components/layouts/main'
import TransitionEffect from '@/components/transition'


if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const outfit = Outfit({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <MainLayout className={`${outfit.className}`}>
      <AnimatePresence mode='wait'
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <motion.div key={router.asPath}>
          <TransitionEffect />
          <Component  {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </MainLayout>
  )
}
