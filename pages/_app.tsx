import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

import '../styles/homepage.css'
import '../styles/navbar.css'
import "../styles/jadwal-kuliah.css"
import "../styles/daftar-nilai.css"
import "../styles/login.css"
import "../styles/carousel.css"

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}



function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return getLayout (
    <>
      <Head>
         {/*Bootstrap CSS*/}
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"></link>

        {/*Google Font*/}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
