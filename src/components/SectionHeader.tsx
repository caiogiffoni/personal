import { VStack, Text, Heading, useColorModeValue } from '@chakra-ui/react'

type Props = {
  tag: string
  title: string
  subtitle?: string
}

const SectionHeader = ({ tag, title, subtitle }: Props) => {
  const accent = useColorModeValue('blue.500', 'green.400')
  const subColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack spacing={3} textAlign="center">
      <Text color={accent} fontFamily="mono" fontSize="sm">
        {tag}
      </Text>
      <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight="700">
        {title}
      </Heading>
      {subtitle && (
        <Text color={subColor} maxW="520px" fontSize="md" lineHeight="1.8">
          {subtitle}
        </Text>
      )}
    </VStack>
  )
}

export default SectionHeader
