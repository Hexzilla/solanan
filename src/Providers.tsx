import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { ConnectionProvider } from './contexts/Solana';

const ThemeProviderWrapper = (props: any) => {
  const light = {}
  return <ThemeProvider theme={light} {...props} />
}

const Providers: React.FC = ({ children }) => {
  return (
    <ConnectionProvider>
      <HelmetProvider>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </HelmetProvider>
    </ConnectionProvider>
  )
}

export default Providers
