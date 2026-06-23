import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Badge,
  HStack,
  Icon,
  Link,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaUser, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MotionBox } from '../lib/motion'
import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const PER_PAGE = 2

const Projects = () => {
  const { lang } = useLanguage()
  const t = translations[lang].projects
  const accent = useColorModeValue('blue.500', 'green.400')
  const subColor = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const labelColor = useColorModeValue('gray.400', 'gray.500')
  const impactBg = useColorModeValue('green.50', 'rgba(72,187,120,0.08)')
  const dotActive = useColorModeValue('blue.500', 'green.400')
  const dotInactive = useColorModeValue('gray.300', 'gray.600')

  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(projects.length / PER_PAGE)
  const pageProjects = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <Box as="section" id="projects" py={{ base: 20, md: 28 }} px={{ base: 5, md: 10 }}>
      <Container maxW="1000px">
        <VStack spacing={{ base: 12, md: 16 }}>
          <SectionHeader
            tag={t.tag}
            title={t.title}
            subtitle={t.subtitle}
          />

          <Box w="full">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {pageProjects.map((project, i) => {
                const globalIndex = page * PER_PAGE + i
                const text = t.items[globalIndex]
                return (
                  <MotionBox
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    h="full"
                  >
                    <Box
                      bg="card-bg"
                      border="1px solid"
                      borderColor={borderColor}
                      borderRadius="xl"
                      p={6}
                      h="full"
                      display="flex"
                      flexDirection="column"
                      gap={4}
                    >
                      <Flex justify="space-between" align="flex-start">
                        <VStack align="flex-start" spacing={0.5}>
                          <HStack spacing={2}>
                            <Icon
                              as={project.type === 'professional' ? FaBriefcase : FaUser}
                              fontSize="xs"
                              color={labelColor}
                            />
                            <Text fontSize="xs" color={labelColor} fontFamily="mono">
                              {project.company}
                            </Text>
                          </HStack>
                          <Heading as="h3" fontSize="md" fontWeight="700" lineHeight="1.3">
                            {text.title}
                          </Heading>
                        </VStack>

                        <HStack spacing={2} flexShrink={0} ml={3}>
                          {project.githubUrl && (
                            <Link href={project.githubUrl} isExternal>
                              <Icon as={FaGithub} color={subColor} _hover={{ color: accent }} />
                            </Link>
                          )}
                          {project.liveUrl && (
                            <Link href={project.liveUrl} isExternal>
                              <Icon as={FaExternalLinkAlt} color={subColor} _hover={{ color: accent }} fontSize="xs" />
                            </Link>
                          )}
                        </HStack>
                      </Flex>

                      <VStack align="flex-start" spacing={3} flex={1}>
                        {text.problem && (
                          <Box>
                            <Text fontSize="xs" color={labelColor} fontWeight="600" textTransform="uppercase" letterSpacing="wide" mb={1}>
                              {t.labels.problem}
                            </Text>
                            <Text fontSize="sm" color={subColor} lineHeight="1.7">
                              {text.problem}
                            </Text>
                          </Box>
                        )}

                        <Box>
                          <Text fontSize="xs" color={labelColor} fontWeight="600" textTransform="uppercase" letterSpacing="wide" mb={1}>
                            {text.problem ? t.labels.solution : t.labels.whatIBuilt}
                          </Text>
                          <Text fontSize="sm" color={subColor} lineHeight="1.7">
                            {text.solution}
                          </Text>
                        </Box>

                        {text.impact && (
                          <Box
                            bg={impactBg}
                            borderLeft="3px solid"
                            borderColor="green.400"
                            borderRadius="sm"
                            px={3}
                            py={2}
                          >
                            <Text fontSize="xs" color={labelColor} fontWeight="600" textTransform="uppercase" letterSpacing="wide" mb={0.5}>
                              {t.labels.impact}
                            </Text>
                            <Text fontSize="sm" color={subColor} lineHeight="1.6">
                              {text.impact}
                            </Text>
                          </Box>
                        )}
                      </VStack>

                      <Flex flexWrap="wrap" gap={1.5} mt="auto">
                        {project.tech.map((tech) => (
                          <Badge key={tech} colorScheme="green" variant="subtle" fontSize="2xs" px={2} py={0.5} borderRadius="sm">
                            {tech}
                          </Badge>
                        ))}
                      </Flex>
                    </Box>
                  </MotionBox>
                )
              })}
            </SimpleGrid>

            <Flex justify="center" align="center" mt={8} gap={4}>
              <IconButton
                aria-label="Previous page"
                icon={<FaChevronLeft />}
                size="sm"
                variant="ghost"
                isDisabled={page === 0}
                onClick={() => setPage((p) => p - 1)}
              />

              <HStack spacing={2}>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <Box
                    key={idx}
                    w={2}
                    h={2}
                    borderRadius="full"
                    bg={idx === page ? dotActive : dotInactive}
                    cursor="pointer"
                    transition="background 0.2s"
                    onClick={() => setPage(idx)}
                  />
                ))}
              </HStack>

              <IconButton
                aria-label="Next page"
                icon={<FaChevronRight />}
                size="sm"
                variant="ghost"
                isDisabled={page === totalPages - 1}
                onClick={() => setPage((p) => p + 1)}
              />
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects
