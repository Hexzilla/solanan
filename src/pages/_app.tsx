import '@solana/wallet-adapter-react-ui/styles.css'
import '../styles/index.less';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
