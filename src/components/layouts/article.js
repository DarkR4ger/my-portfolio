import Head from 'next/head'
import { useEffect } from 'react';

const Layout = ({ children, title }) => {
  const t = `${title} - Gowtham Saravanan`
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
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
