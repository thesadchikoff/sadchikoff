import { Html, Head, Main, NextScript } from 'next/document'
import icon from '../../public/icon.ico'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="../../public/icon.ico"/>
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
