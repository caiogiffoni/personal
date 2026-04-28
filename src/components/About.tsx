import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  useColorModeValue,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { MotionBox, MotionFlex } from "../lib/motion";
import SectionHeader from "./SectionHeader";
import caio from "../config/caio2.png";

const quickFacts = ["São Paulo, Brazil", "Open to remote", "English - Fluent"];

const About = () => {
  const accent = useColorModeValue("blue.500", "green.400");
  const subColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      as="section"
      id="about"
      bg="section-alt"
      py={{ base: 20, md: 28 }}
      px={{ base: 5, md: 10 }}
    >
      <Container maxW="1000px">
        <VStack spacing={{ base: 12, md: 16 }}>
          <SectionHeader tag="// who I am" title="About Me" />

          <MotionFlex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 10, md: 14 }}
            align={{ base: "center", md: "flex-start" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Photo — drop your photo at public/photo.jpg to replace the initials avatar */}
            <Box flexShrink={0}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                border="3px solid"
                bgColor={accent}
                borderColor={accent}
                w={{ base: "160px", md: "220px" }}
                h={{ base: "160px", md: "300px" }}
              >
                <Avatar
                  src={caio}
                  name="Caio Giffoni"
                  w="full"
                  h="full"
                  borderRadius="0"
                  fontSize={{ base: "4xl", md: "5xl" }}
                />
              </Box>
            </Box>

            <VStack align="flex-start" spacing={5} flex={1}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={subColor}
                lineHeight="1.85"
              >
                I started my career managing construction projects worth tens of
                millions of dollars - coordinating teams, deadlines, and solving
                problems. In 2021, I made a bet on myself and transitioned into
                software. Best decision I've made. That background in
                engineering and getting things built is still at the core of how
                I work.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={subColor}
                lineHeight="1.85"
              >
                Today I build software that helps companies automate the slow,
                expensive, manual stuff. I'm drawn to problems where a
                well-designed system can save a team months of work and I care a
                lot about getting the details right, because in the kind of
                workflows I work on, the details are what make or break it.
              </Text>

              <HStack flexWrap="wrap" gap={3} pt={1}>
                {quickFacts.map((label) => (
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

          <MotionBox
            w="full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <Box
              bg="card-bg"
              border="1px solid"
              borderColor={useColorModeValue("gray.200", "gray.700")}
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
                  <Link href="https://associacaocactus.org.br/">
                    Data Analyst - Cactus NGO.{"  "}
                  </Link>
                </Text>
                Contributed data analysis work to support the NGO's operations
                and decision-making. Applying technical skills to social impact
                outside of paid work.
              </Text>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
