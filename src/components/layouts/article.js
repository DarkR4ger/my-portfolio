import TransitionEffect from '../transition'
import Head from 'next/head'

const Layout = ({ children, title }) => {
  const t = `${title} - Gowtham Saravanan`
  return (
    <>
      <TransitionEffect />
      <main className='container'>
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta name="og:title" content={t} />
        </Head>
        {children}
      </main>
    </>
  )
}

export default Layout
