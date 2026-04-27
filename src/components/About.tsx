import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Badge,
  Icon,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const About = () => {
  const accent = useColorModeValue('blue.500', 'green.400')
  const subColor = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', '#252525')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const sectionBg = useColorModeValue('#e8e8e8', '#141414')

  return (
    <Box as="section" id="about" bg={sectionBg} py={{ base: 20, md: 28 }} px={{ base: 5, md: 10 }}>
      <Container maxW="1000px">
        <VStack spacing={{ base: 12, md: 16 }}>
          <VStack spacing={3} textAlign="center">
            <Text color={accent} fontFamily="mono" fontSize="sm">
              {'// who I am'}
            </Text>
            <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight="700">
              About Me
            </Heading>
          </VStack>

          <MotionFlex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 10, md: 14 }}
            align={{ base: 'center', md: 'flex-start' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Photo — replace /photo.jpg in the public/ folder with your actual photo */}
            <Box flexShrink={0}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                border="3px solid"
                borderColor={accent}
                w={{ base: '160px', md: '200px' }}
                h={{ base: '160px', md: '200px' }}
              >
                <Avatar
                  src="/photo.jpg"
                  name="Caio Giffoni"
                  w="full"
                  h="full"
                  borderRadius="0"
                  fontSize={{ base: '4xl', md: '5xl' }}
                />
              </Box>
            </Box>

            {/* Story */}
            <VStack align="flex-start" spacing={5} flex={1}>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={subColor} lineHeight="1.85">
                I started my career managing construction projects worth tens of millions of dollars —
                planning, leading teams, and solving complex logistical problems under real pressure.
                In 2021, I made a deliberate pivot: enrolled in a full-stack bootcamp, graduated, and
                was immediately invited back as a teacher. That combination of engineering discipline
                and a love for building things is what defines how I work.
              </Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={subColor} lineHeight="1.85">
                Today I build AI agents that automate high-stakes workflows — the kind of work where
                reliability and precision matter enormously. I'm drawn to problems where software can
                replace months of manual work, and I thrive at the intersection of automation, data,
                and system design.
              </Text>

              {/* Quick facts */}
              <HStack flexWrap="wrap" gap={3} pt={1}>
                {[
                  { label: 'São Paulo, Brazil', icon: null },
                  { label: 'Open to remote', icon: null },
                  { label: 'English — Fluent (TOEFL 96)', icon: null },
                ].map(({ label }) => (
                  <Badge
                    key={label}
                    colorScheme="green"
                    variant="subtle"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    {label}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </MotionFlex>

          {/* Volunteer work */}
          <MotionBox
            w="full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <Box
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="xl"
              p={5}
            >
              <HStack spacing={2} mb={2}>
                <Icon as={FaHeart} color="red.400" />
                <Text fontWeight="600" fontSize="sm">
                  Volunteer Work
                </Text>
              </HStack>
              <Text fontSize="sm" color={subColor} lineHeight="1.75">
                <Text as="span" fontWeight="600" color={accent}>
                  Data Analyst — Cactus NGO.{' '}
                </Text>
                Contributed data analysis work to support the NGO's operations and decision-making —
                applying technical skills to social impact outside of paid work.
              </Text>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default About
