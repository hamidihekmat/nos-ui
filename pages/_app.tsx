import { ChakraProvider, Box } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { Nav } from '../components/Nav';
import { useEffect } from 'react';
import { isChrome, isEdgeChromium } from 'react-device-detect';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (isChrome || isEdgeChromium) {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then(
            (registration) => {
              console.log(
                `Service worker registration successful with scope: ${registration}`
              );
            },
            (error) => {
              console.log(`Service worker registration failed: ${error}`);
            }
          );
        });
      }
    }
  }, []);
  return (
    <ChakraProvider resetCSS>
      <GlobalStyle />
      <Header />
      <Box display="flex">
        <Nav />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
