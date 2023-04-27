'use client'

import * as React from "react";
import { Providers } from "./providers";
// import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { useNavigation } from './lib/helpers/useNav';
import './globals.css';
import Navbar from './components/Navbar';


export default function RootLayout({children,}: {children: React.ReactNode}) {
  const [y, scrollDir]: [number, string] = useNavigation();
  const pageRefs: React.MutableRefObject<{}> = React.useRef({});
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Navbar 
                pageRefs={pageRefs}
                scrollDir={scrollDir}
                y={y}/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
