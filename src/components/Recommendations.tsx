import {
  Box,
  Container,
  VStack,
  SimpleGrid,
  Text,
  HStack,
  Avatar,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { MotionBox } from "../lib/motion";
import SectionHeader from "./SectionHeader";

type Recommendation = {
  name: string;
  title: string;
  context: string;
  quote: string;
  initials: string;
};

const recommendations: Recommendation[] = [
  {
    name: "Craig Gifford",
    title: "Product Leader, Smarter Technologies",
    context: "Worked together at Thoughtful AI · April 2026",
    initials: "CG",
    quote:
      "I had the opportunity to work closely with Caio at Thoughtful AI on a year-long client engagement focused on reconciling payments across three separate (and often unsynchronized) systems. It was a complex engagement within a highly legacy environment, and Caio played a central role in driving it forward. He led development across multiple AI agent workflows, delivering meaningful automation in a space that typically relies heavily on manual effort. What stood out most was his approach to client engagement - Caio was highly responsive, consistently available, and proactive in his communication. He built strong trust with stakeholders by quickly addressing questions, providing clear updates, and maintaining momentum even when challenges arose. Beyond his technical leadership, Caio is a great teammate - reliable, thoughtful, and enjoyable to work with. I’d highly recommend Caio to any organization looking for someone who brings both strong technical execution and exceptional client engagement.",
  },
  {
    name: "Bill Piazzetta",
    title: "Automation & RPA Engineer, Thoughtful AI",
    context: "Same team at Thoughtful AI · April 2026",
    initials: "BP",
    quote:
      "Caio started working at Thoughtful some time after I'd joined and quickly showed what a dedicated, hard-working and talented professional he is, which led to him soon being tasked with more and more responsibility within the project we were working on. He is supportive and a real team player; I could always count on him whenever I needed help, even when working on separate projects.",
  },
];

const RecommendationCard = ({
  rec,
  index,
}: {
  rec: Recommendation;
  index: number;
}) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const subColor = useColorModeValue("gray.600", "gray.400");
  const accent = useColorModeValue("blue.500", "green.400");

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
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
    </MotionBox>
  );
};

const Recommendations = () => {
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

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={6}
            w="full"
            alignItems="start"
          >
            {recommendations.map((rec, i) => (
              <RecommendationCard key={rec.name} rec={rec} index={i} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Recommendations;
