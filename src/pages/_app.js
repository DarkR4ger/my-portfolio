import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Outfit } from 'next/font/google'
import { useRouter } from 'next/router'
import MainLayout from '@/components/layouts/main'

const outfit = Outfit({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <MainLayout className={`${outfit.className}`}>
      <AnimatePresence mode='wait'>
        <Component key={router.asPath}  {...pageProps} />
      </AnimatePresence>
    </MainLayout>
  )
}
