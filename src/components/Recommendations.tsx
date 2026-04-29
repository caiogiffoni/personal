import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Avatar,
  Icon,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Recommendation = {
  name: string;
  title: string;
  context: string;
  quote: string;
};

const recommendations: Recommendation[] = [
  {
    name: "Craig Gifford",
    title: "Product Leader, Smarter Technologies",
    context: "Worked together at Thoughtful AI · April 2026",
    quote:
      "I had the opportunity to work closely with Caio at Thoughtful AI on a year-long client engagement focused on reconciling payments across three separate (and often unsynchronized) systems. It was a complex engagement within a highly legacy environment, and Caio played a central role in driving it forward. He led development across multiple AI agent workflows, delivering meaningful automation in a space that typically relies heavily on manual effort. What stood out most was his approach to client engagement - Caio was highly responsive, consistently available, and proactive in his communication. He built strong trust with stakeholders by quickly addressing questions, providing clear updates, and maintaining momentum even when challenges arose. Beyond his technical leadership, Caio is a great teammate - reliable, thoughtful, and enjoyable to work with. I'd highly recommend Caio to any organization looking for someone who brings both strong technical execution and exceptional client engagement.",
  },
  {
    name: "Igor Matheus",
    title: "Forward Deployed Engineer",
    context: "Same team at Thoughtful AI · April 2026",
    quote:
      "I had the opportunity to work with Caio on an ongoing project, and he quickly stood out for his dedication and willingness to dive deep into the details. Even joining with a significant amount of existing context and complexity, he was able to ramp up quickly, understand how everything worked, and deliver solid contributions in a short amount of time. Caio is also very easy to work with, approachable, collaborative, and always brings a positive attitude to the team. I would gladly recommend him to any team seeking a reliable, committed software engineer.",
  },
  {
    name: "Bill Piazzetta",
    title: "Automation & RPA Engineer, Thoughtful AI",
    context: "Same team at Thoughtful AI · November 2026",
    quote:
      "Caio started working at Thoughtful some time after I'd joined and quickly showed what a dedicated, hard-working and talented professional he is, which led to him soon being tasked with more and more responsibility within the project we were working on. He is supportive and a real team player; I could always count on him whenever I needed help, even when working on separate projects.",
  },
  {
    name: "Talitta Nunes",
    title: "Geologist and Developer",
    context: "Studied together - Feb 2024",
    quote:
      "Caio is an excellent professional, dedicated to delivering tasks with quality and speed. I had the privilege of collaborating with him on several projects, and among his qualities, his remarkable problem-solving ability stands out. His creativity, teamwork, and teaching skills establish him as a valuable asset in any company and work environment.",
  },
];

const MotionBox = motion(Box);

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const RecommendationCard = ({ rec }: { rec: Recommendation }) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const subColor = useColorModeValue("gray.600", "gray.400");
  const accent = useColorModeValue("blue.500", "green.400");

  return (
    <Box
      bg="card-bg"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      p={6}
      h="full"
      display="flex"
      flexDirection="column"
      gap={5}
    >
      <Icon as={FaQuoteLeft} color={accent} boxSize={5} opacity={0.7} />
      <Text
        fontSize="sm"
        color={subColor}
        lineHeight="1.85"
        flex={1}
        fontStyle="italic"
      >
        "{rec.quote}"
      </Text>
      <HStack spacing={3}>
        <Avatar name={rec.name} size="sm" bg={accent} color="white" />
        <VStack align="flex-start" spacing={0}>
          <Text fontWeight="600" fontSize="sm">
            {rec.name}
          </Text>
          <Text fontSize="xs" color={subColor}>
            {rec.title}
          </Text>
          <Text
            fontSize="xs"
            color={useColorModeValue("gray.400", "gray.500")}
            mt={0.5}
          >
            {rec.context}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

const Recommendations = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const itemsPerPage = useBreakpointValue({ base: 1, md: 2 }) ?? 2;
  const accent = useColorModeValue("blue.500", "green.400");

  const totalPages = Math.ceil(recommendations.length / itemsPerPage);
  const visible = recommendations.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );
  const showNav = totalPages > 1;

  const navigate = (dir: number) => {
    setDirection(dir);
    setPage((p) => (p + dir + totalPages) % totalPages);
  };

  return (
    <Box
      as="section"
      id="recommendations"
      py={{ base: 20, md: 28 }}
      px={{ base: 5, md: 10 }}
    >
      <Container maxW="1000px">
        <VStack spacing={{ base: 12, md: 16 }}>
          <SectionHeader
            tag="// social proof"
            title="Recommendations"
            subtitle="What colleagues and collaborators say about working with me."
          />

          <Box w="full">
            {/* Cards */}
            <Box overflow="hidden" w="full">
              <AnimatePresence mode="wait" custom={direction}>
                <MotionBox
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                  gap={6}
                  alignItems="start"
                >
                  {visible.map((rec) => (
                    <RecommendationCard key={rec.name} rec={rec} />
                  ))}
                </MotionBox>
              </AnimatePresence>
            </Box>

            {/* Navigation */}
            {showNav && (
              <HStack justify="center" mt={8} spacing={4}>
                <IconButton
                  aria-label="Previous"
                  icon={<Icon as={FaChevronLeft} />}
                  onClick={() => navigate(-1)}
                  variant="ghost"
                  size="sm"
                />
                <HStack spacing={2}>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Box
                      key={i}
                      w={2}
                      h={2}
                      borderRadius="full"
                      bg={
                        i === page
                          ? accent
                          : useColorModeValue("gray.300", "gray.600")
                      }
                      cursor="pointer"
                      onClick={() => {
                        setDirection(i > page ? 1 : -1);
                        setPage(i);
                      }}
                      transition="background 0.2s"
                    />
                  ))}
                </HStack>
                <IconButton
                  aria-label="Next"
                  icon={<Icon as={FaChevronRight} />}
                  onClick={() => navigate(1)}
                  variant="ghost"
                  size="sm"
                />
              </HStack>
            )}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Recommendations;
