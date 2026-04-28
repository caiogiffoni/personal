import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'Roboto Mono', monospace`,
  },
  semanticTokens: {
    colors: {
      'page-bg':    { default: '#f0f0f0', _dark: '#1a1a1a' },
      'section-alt': { default: '#e8e8e8', _dark: '#141414' },
      'card-bg':    { default: 'white',   _dark: '#252525' },
      'dot-border': { default: 'white',   _dark: '#1a1a1a' },
    },
  },
  styles: {
    global: {
      html: { scrollBehavior: 'smooth' },
      body: { bg: 'page-bg' },
    },
  },
})

export default theme
