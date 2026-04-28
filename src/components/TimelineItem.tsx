import {
  Box,
  Flex,
  Text,
  Heading,
  Badge,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { TimelineEvent, categoryConfig } from '../data/timeline'
import { MotionBox } from '../lib/motion'

type Props = {
  event: TimelineEvent
  index: number
}

const Card = ({ event }: { event: TimelineEvent }) => {
  const { color } = categoryConfig[event.category]
  const colorScheme = color.split('.')[0]
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const subColor = useColorModeValue('gray.600', 'gray.400')
  const periodColor = useColorModeValue('gray.400', 'gray.500')

  return (
    <Box
      bg="card-bg"
      border="1px solid"
      borderColor={event.featured ? color : borderColor}
      borderRadius="xl"
      p={5}
      boxShadow={event.featured ? 'lg' : 'sm'}
      position="relative"
    >
      {event.featured && (
        <Badge
          colorScheme={colorScheme}
          position="absolute"
          top={3}
          right={3}
          fontSize="2xs"
          borderRadius="sm"
          px={2}
        >
          key moment
        </Badge>
      )}

      <Text fontSize="xs" color={periodColor} fontFamily="mono" mb={1}>
        {event.period}
      </Text>

      <Heading as="h3" fontSize="md" fontWeight="600" mb={0.5} pr={event.featured ? 24 : 0}>
        {event.role}
      </Heading>

      <Text fontSize="sm" color={color} fontWeight="500" mb={event.description ? 3 : 0}>
        {event.organization}
      </Text>

      {event.description && (
        <Text
          fontSize="sm"
          color={subColor}
          lineHeight="1.75"
          mb={event.highlights || event.tech ? 3 : 0}
        >
          {event.description}
        </Text>
      )}

      {event.highlights && (
        <VStack align="flex-start" spacing={1.5} mb={3}>
          {event.highlights.map((h) => (
            <HStack key={h} align="flex-start" spacing={2}>
              <Text color={color} mt="3px" flexShrink={0} fontSize="xs" lineHeight={1}>▸</Text>
              <Text fontSize="sm" color={subColor} lineHeight="1.6">{h}</Text>
            </HStack>
          ))}
        </VStack>
      )}

      {event.tech && (
        <Flex flexWrap="wrap" gap={1.5}>
          {event.tech.map((t) => (
            <Badge key={t} colorScheme={colorScheme} variant="subtle" fontSize="2xs" px={2} py={0.5} borderRadius="sm">
              {t}
            </Badge>
          ))}
        </Flex>
      )}
    </Box>
  )
}

const TimelineItem = ({ event, index }: Props) => {
  const { color, icon } = categoryConfig[event.category]
  const isLeft = index % 2 === 0

  return (
    <Box w="full" position="relative">
      <Box
        position="absolute"
        left={{ base: '10px', md: '50%' }}
        top={{ base: '18px', md: '20px' }}
        transform="translateX(-50%)"
        w={9}
        h={9}
        borderRadius="full"
        bg={color}
        border="3px solid"
        borderColor="dot-border"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize="sm"
        zIndex={1}
      >
        <Icon as={icon} />
      </Box>

      <Flex
        pl={{ base: '52px', md: 0 }}
        justify={{ base: 'flex-start', md: isLeft ? 'flex-start' : 'flex-end' }}
      >
        <MotionBox
          w={{ base: 'full', md: '46%' }}
          pr={{ base: 0, md: isLeft ? 10 : 0 }}
          pl={{ base: 0, md: isLeft ? 0 : 10 }}
          initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Card event={event} />
        </MotionBox>
      </Flex>
    </Box>
  )
}

export default TimelineItem
