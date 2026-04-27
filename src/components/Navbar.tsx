import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  HStack,
  Link,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Journey',  href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const bg = useColorModeValue('#e2e2e2', '#212121')
  const accent = useColorModeValue('blue.500', 'green.400')
  const linkColor = useColorModeValue('gray.600', 'gray.300')
  const showLinks = useBreakpointValue({ base: false, md: true })

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={bg}
      px={{ base: 5, md: 10 }}
      py={3}
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center" maxW="1100px" mx="auto">
        <Text fontWeight="700" fontSize="lg" color={accent} fontFamily="mono">
          caio.dev
        </Text>

        <HStack spacing={{ base: 2, md: 6 }}>
          {showLinks &&
            navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                fontSize="sm"
                color={linkColor}
                fontWeight="500"
                _hover={{ color: accent, textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}

          <HStack spacing={1}>
            <Link href="https://github.com/caiogiffoni" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<Icon as={FaGithub} />}
                variant="ghost"
                size="sm"
              />
            </Link>
            {/* TODO: replace with your actual LinkedIn URL */}
            <Link href="https://linkedin.com/in/caiogiffoni" isExternal>
              <IconButton
                aria-label="LinkedIn"
                icon={<Icon as={FaLinkedin} />}
                variant="ghost"
                size="sm"
              />
            </Link>
            <IconButton
              aria-label="Toggle color mode"
              icon={<Icon as={colorMode === 'dark' ? FaSun : FaMoon} />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
