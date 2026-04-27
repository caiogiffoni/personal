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
  styles: {
    global: (props: { colorMode: string }) => ({
      html: { scrollBehavior: 'smooth' },
      body: {
        bg: props.colorMode === 'dark' ? '#1a1a1a' : '#f0f0f0',
        color: props.colorMode === 'dark' ? '#e0e0e0' : '#1a1a1a',
      },
    }),
  },
})

export default theme
