import { Box, Container, VStack, useColorModeValue } from "@chakra-ui/react";
import { timelineEvents } from "../data/timeline";
import SectionHeader from "./SectionHeader";
import TimelineItem from "./TimelineItem";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Timeline = () => {
  const lineColor = useColorModeValue("gray.300", "gray.700");
  const { lang } = useLanguage();
  const t = translations[lang].timeline;

  const events = timelineEvents.map((e) => ({
    ...e,
    ...(t.eventTexts[e.id] ?? {}),
  }));

  return (
    <Box
      as="section"
      id="journey"
      py={{ base: 20, md: 28 }}
      px={{ base: 5, md: 10 }}
    >
      <Container maxW="1000px">
        <VStack spacing={{ base: 14, md: 20 }}>
          <SectionHeader
            tag={t.tag}
            title={t.title}
            subtitle={t.subtitle}
          />

          <Box position="relative" w="full">
            <Box
              position="absolute"
              left={{ base: "19px", md: "50%" }}
              top={0}
              bottom={0}
              w="2px"
              bg={lineColor}
              transform={{ md: "translateX(-50%)" }}
            />
            <VStack spacing={{ base: 6, md: 8 }} align="stretch">
              {events.map((event, index) => (
                <TimelineItem key={event.id} event={event} index={index} />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Timeline;
