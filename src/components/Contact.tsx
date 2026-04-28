import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Button,
  Link,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

const lookingFor = [
  { label: 'Role type',   value: 'Backend, full-stack, or AI/automation-focused' },
  { label: 'Stack',       value: 'Python primary — comfortable across the full stack' },
  { label: 'Team',        value: 'Distributed, international teams where autonomy is expected' },
  { label: 'Location',    value: 'Remote-first (São Paulo, Brazil — UTC-3)' },
]

const Contact = () => {
  const subColor = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const labelColor = useColorModeValue('gray.400', 'gray.500')

  return (
    <Box as="section" id="contact" py={{ base: 20, md: 28 }} px={{ base: 5, md: 10 }}>
      <Container maxW="800px">
        <VStack spacing={12}>
          <SectionHeader
            tag="// get in touch"
            title="Let's Connect"
            subtitle="I'm currently open to new opportunities. Whether you have a project in mind, want to talk shop, or just want to say hi — my inbox is always open."
          />

          <Box w="full">
            <Text fontWeight="700" fontSize="sm" mb={4} textAlign="center" color="green.400" fontFamily="mono">
              {"// what I'm looking for"}
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
              {lookingFor.map(({ label, value }) => (
                <Box key={label} bg="card-bg" border="1px solid" borderColor={borderColor} borderRadius="xl" p={4}>
                  <Text fontSize="xs" color={labelColor} fontWeight="600" textTransform="uppercase" letterSpacing="wide" mb={1}>
                    {label}
                  </Text>
                  <Text fontSize="sm" color={subColor} lineHeight="1.6">
                    {value}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <VStack spacing={5}>
            <Button
              as={Link}
              href="mailto:caio_cgf@hotmail.com"
              leftIcon={<Icon as={FaEnvelope} />}
              colorScheme="green"
              size="lg"
              px={10}
              _hover={{ textDecoration: 'none' }}
            >
              Say Hello
            </Button>

            <HStack spacing={6}>
              <Link href="https://github.com/caiogiffoni" isExternal>
                <Button leftIcon={<Icon as={FaGithub} />} variant="ghost" size="sm">GitHub</Button>
              </Link>
              {/* TODO: replace with your actual LinkedIn URL */}
              <Link href="https://linkedin.com/in/caiogiffoni" isExternal>
                <Button leftIcon={<Icon as={FaLinkedin} />} variant="ghost" size="sm">LinkedIn</Button>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact
