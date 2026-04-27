import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const stats = [
  { value: '60 days', label: 'billing backlog eliminated', sub: '→ near real-time' },
  { value: '90%',     label: 'client time saved',         sub: 'in order processing' },
  { value: '50+',     label: 'students mentored',         sub: 'in web development' },
  { value: '4+',      label: 'years in software',         sub: 'full-stack & AI' },
  { value: '2×',      label: 'AWS certified',             sub: 'Developer & Practitioner' },
]

const StatsBanner = () => {
  const bg = useColorModeValue('gray.900', '#111111')
  const accent = useColorModeValue('green.400', 'green.400')

  return (
    <Box bg={bg} py={{ base: 10, md: 14 }} px={{ base: 5, md: 10 }}>
      <Container maxW="1000px">
        <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} spacing={{ base: 8, md: 4 }}>
          {stats.map((stat, i) => (
            <MotionBox
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              textAlign="center"
            >
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color={accent} fontWeight="800" fontFamily="mono">
                {stat.value}
              </Heading>
              <Text fontSize="sm" color="gray.300" mt={1} lineHeight="1.4">
                {stat.label}
              </Text>
              <Text fontSize="xs" color="gray.500" mt={0.5}>
                {stat.sub}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default StatsBanner
