'use client'

import * as React from "react";
import { Providers } from "./providers";
// import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import './globals.css';



export default function RootLayout({children,}: {children: React.ReactNode}) {
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

          {children}
        </Providers>
      </body>
    </html>
  )
}
