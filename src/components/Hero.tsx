import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  Badge,
  Icon,
  Link,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const MotionBox = motion(Box)

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

const Hero = () => {
  const accent = useColorModeValue('blue.500', 'green.400')
  const subColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      px={{ base: 5, md: 10 }}
      pt="80px"
    >
      <Container maxW="900px" px={0}>
        <VStack align="flex-start" spacing={7}>
          <MotionBox {...fadeUp(0)}>
            <Text color={accent} fontFamily="mono" fontSize="sm" mb={3}>
              {'// hello world'}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '5xl', md: '7xl' }}
              fontWeight="800"
              lineHeight="1.05"
              letterSpacing="-1px"
            >
              Caio Giffoni
            </Heading>
          </MotionBox>

          <MotionBox {...fadeUp(0.15)}>
            <Heading
              as="h2"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="400"
              color={subColor}
            >
              Software Developer
            </Heading>
          </MotionBox>

          <MotionBox {...fadeUp(0.3)} maxW="580px">
            <Text fontSize={{ base: 'md', md: 'lg' }} color={subColor} lineHeight="1.85">
              Former civil engineer who traded blueprints for bytecode.
              Now building AI agents that automate healthcare billing —
              turning months of manual work into near real-time processing.
              4+ years of turning complex problems into scalable software.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0.45)}>
            <HStack spacing={2} flexWrap="wrap" rowGap={2}>
              {[
                { label: 'Python', scheme: 'blue' },
                { label: 'React', scheme: 'cyan' },
                { label: 'AWS Certified', scheme: 'orange' },
                { label: 'AI Agents', scheme: 'green' },
                { label: 'Full Stack', scheme: 'purple' },
                { label: 'English — TOEFL 96', scheme: 'teal' },
                { label: 'Open to remote', scheme: 'gray' },
              ].map(({ label, scheme }) => (
                <Badge
                  key={label}
                  colorScheme={scheme}
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="600"
                >
                  {label}
                </Badge>
              ))}
            </HStack>
          </MotionBox>

          <MotionBox {...fadeUp(0.6)}>
            <HStack spacing={3} flexWrap="wrap" rowGap={3}>
              {/* TODO: replace with your actual LinkedIn URL */}
              <Button
                as={Link}
                href="https://linkedin.com/in/caiogiffoni"
                isExternal
                leftIcon={<Icon as={FaLinkedin} />}
                colorScheme="green"
                size="md"
                _hover={{ textDecoration: 'none' }}
              >
                LinkedIn
              </Button>
              <Button
                as={Link}
                href="https://github.com/caiogiffoni"
                isExternal
                leftIcon={<Icon as={FaGithub} />}
                variant="outline"
                size="md"
                _hover={{ textDecoration: 'none' }}
              >
                GitHub
              </Button>
              <Button
                as="a"
                href="/cv.pdf"
                download
                leftIcon={<Icon as={FaDownload} />}
                variant="ghost"
                size="md"
              >
                Download CV
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero
