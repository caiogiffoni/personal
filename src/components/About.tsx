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
import caio from "../assets/caio2.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const About = () => {
  const accent = useColorModeValue("blue.500", "green.400");
  const subColor = useColorModeValue("gray.600", "gray.400");
  const { lang } = useLanguage();
  const t = translations[lang].about;

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
          <SectionHeader tag={t.tag} title={t.title} />

          <MotionFlex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 10, md: 14 }}
            align={{ base: "center", md: "flex-start" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
                {t.p1}
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={subColor}
                lineHeight="1.85"
              >
                {t.p2}
              </Text>

              <HStack flexWrap="wrap" gap={3} pt={1}>
                {t.quickFacts.map((label) => (
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
                  {t.volunteerTitle}
                </Text>
              </HStack>
              <Text fontSize="sm" color={subColor} lineHeight="1.75">
                <Text as="span" fontWeight="600" color={accent}>
                  <Link href="https://associacaocactus.org.br/">
                    Data Analyst - Cactus NGO.{"  "}
                  </Link>
                </Text>
                {t.volunteerText}
              </Text>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
