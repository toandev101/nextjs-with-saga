import React from 'react'
import Head from 'next/head'

import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.css';
// import '../styles/vars.css'
// import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <style global jsx>{`
          html,
          body {
            font-family: 'Helvetica Neue', 'Hiragino Sans GB', Helvetica,
              'Microsoft YaHei', Arial;
            margin: 0;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
  
}
