import NextNprogress from 'nextjs-progressbar'
import { Provider as AuthProvider } from 'next-auth/client'

import { useApollo } from 'utils/apollo'
import { ApolloProvider } from '@apollo/client'

import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'hooks/use-cart'

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  //initialApoloState => cache do apollo
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="description" content="The best game store" />
            </Head>
            <GlobalStyles />

            <NextNprogress
              color="#f231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
            />

            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
