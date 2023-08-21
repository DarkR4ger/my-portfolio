import Header from '@/components/Header'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Outfit } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const outfit = Outfit({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${outfit.className} dark:bg-black dark:text-zinc-50`}>
        <Header />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath}  {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  )
}
