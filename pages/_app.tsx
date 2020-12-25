import { AnimateSharedLayout } from 'framer-motion'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <AnimateSharedLayout>
    <Component {...pageProps} />
  </AnimateSharedLayout>
)

export default App
