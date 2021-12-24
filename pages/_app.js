import React, { useEffect, useState } from 'react';
import { Footer, Header, Layout } from '../components';
// import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import { ViewportProvider } from '../context/ViewPortContext';

function MyApp({ Component, pageProps }) {
  return (
    <ViewportProvider>
      <div className="page-container relative h-screen p-4 bg-white">
        <div className="h-4 w-full top-0 fixed left-0 bg-white border-b border-solid border-black"></div>
        <div className="h-4 w-full bottom-0 fixed left-0 bg-white border-t border-solid border-black"></div>
        <div className="h-full w-4 top-4 bottom-0 fixed left-0 bg-white border-r border-solid border-black"></div>
        <div className="h-full w-4 top-4 bottom-0 fixed right-0 bg-white border-l border-solid border-black"></div>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </div>
    </ViewportProvider>
  )
}

export default MyApp
