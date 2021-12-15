import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'

const ThemeProviderWrapper = (props: any) => {
  return <ThemeProvider {...props} />
}

const Providers: React.FC = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProviderWrapper>
        {children}
      </ThemeProviderWrapper>
    </HelmetProvider>
  )
}

export default Providers
