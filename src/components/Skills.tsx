import {
  Box,
  Container,
  VStack,
  SimpleGrid,
  Flex,
  Badge,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { MotionBox } from '../lib/motion'
import { skillGroups } from '../data/skills'
import SectionHeader from './SectionHeader'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const Skills = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const { lang } = useLanguage()
  const t = translations[lang].skills
  const groups = skillGroups.map((g, i) => ({ ...g, label: t.groupLabels[i] }))

  return (
    <Box as="section" id="skills" bg="section-alt" py={{ base: 20, md: 28 }} px={{ base: 5, md: 10 }}>
      <Container maxW="1000px">
        <VStack spacing={{ base: 12, md: 16 }}>
          <SectionHeader
            tag={t.tag}
            title={t.title}
            subtitle={t.subtitle}
          />

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} w="full">
            {groups.map((group, i) => {
              const colorScheme = group.color.split('.')[0]
              return (
                <MotionBox
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Box bg="card-bg" border="1px solid" borderColor={borderColor} borderRadius="xl" p={5} h="full">
                    <Text
                      fontSize="xs"
                      fontWeight="700"
                      color={group.color}
                      textTransform="uppercase"
                      letterSpacing="wider"
                      mb={3}
                    >
                      {group.label}
                    </Text>
                    <Flex flexWrap="wrap" gap={2}>
                      {group.skills.map((skill) => (
                        <Badge key={skill} colorScheme={colorScheme} variant="subtle" fontSize="sm" px={3} py={1} borderRadius="md">
                          {skill}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </MotionBox>
              )
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Skills
