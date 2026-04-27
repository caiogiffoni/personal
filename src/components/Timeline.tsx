import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { timelineEvents } from '../data/timeline'
import TimelineItem from './TimelineItem'

const Timeline = () => {
  const accent = useColorModeValue('blue.500', 'green.400')
  const subColor = useColorModeValue('gray.600', 'gray.400')
  const lineColor = useColorModeValue('gray.300', 'gray.700')
  const sectionBg = useColorModeValue('#e8e8e8', '#141414')

  return (
    <Box as="section" id="journey" bg={sectionBg} py={{ base: 20, md: 28 }} px={{ base: 5, md: 10 }}>
      <Container maxW="1000px">
        <VStack spacing={{ base: 14, md: 20 }}>
          <VStack spacing={3} textAlign="center">
            <Text color={accent} fontFamily="mono" fontSize="sm">
              {'// my story'}
            </Text>
            <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight="700">
              The Journey
            </Heading>
            <Text color={subColor} maxW="520px" fontSize="md" lineHeight="1.8">
              From managing R$40M construction sites to building AI agents —
              a non-linear path driven by curiosity and a love for building things that matter.
            </Text>
          </VStack>

          <Box position="relative" w="full">
            {/* Vertical line */}
            <Box
              position="absolute"
              left={{ base: '19px', md: '50%' }}
              top={0}
              bottom={0}
              w="2px"
              bg={lineColor}
              transform={{ md: 'translateX(-50%)' }}
            />

            <VStack spacing={{ base: 6, md: 8 }} align="stretch">
              {timelineEvents.map((event, index) => (
                <TimelineItem key={event.id} event={event} index={index} />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Timeline
