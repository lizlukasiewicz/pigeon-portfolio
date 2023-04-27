// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
// CUSTOMIZES THEME
import theme from './theme'
// import { extendTheme } from '@chakra-ui/react'
// export const theme = extendTheme({ colors })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
      {/* <ChakraProvider> */}
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}