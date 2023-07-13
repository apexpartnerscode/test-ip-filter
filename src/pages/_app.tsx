import { OperationsStoreProvider } from '@/store'
import '@/styles/globals.sass'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <OperationsStoreProvider><Component {...pageProps} /></OperationsStoreProvider>
}
