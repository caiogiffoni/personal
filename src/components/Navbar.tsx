import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  HStack,
  Link,
  Icon,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "../lib/motion";
import CONFIG from "../config/config";
import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const navHrefs = ["#about", "#journey", "#skills", "#recommendations", "#contact"];

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bg = useColorModeValue("#e2e2e2", "#212121");
  const accent = useColorModeValue("blue.500", "green.400");
  const linkColor = useColorModeValue("gray.600", "gray.300");
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navRef = useRef<HTMLElement>(null);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const navLinks = [
    { label: t.nav.about,           href: navHrefs[0] },
    { label: t.nav.journey,         href: navHrefs[1] },
    { label: t.nav.skills,          href: navHrefs[2] },
    { label: t.nav.recommendations, href: navHrefs[3] },
    { label: t.nav.contact,         href: navHrefs[4] },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <Box
      as="nav"
      ref={navRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={bg}
      boxShadow="sm"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1100px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        py={3}
      >
        <Text fontWeight="700" fontSize="lg" color={accent} fontFamily="mono">
          caiogiffoni
        </Text>

        <HStack spacing={{ base: 2, md: 6 }}>
          {/* Desktop links */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                fontSize="sm"
                color={linkColor}
                fontWeight="500"
                _hover={{ color: accent, textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </HStack>

          <HStack spacing={1}>
            <HStack spacing={0} fontFamily="mono" fontSize="xs" fontWeight="700">
              <Text
                as="button"
                px={1.5}
                py={1}
                cursor="pointer"
                color={lang === 'en' ? accent : linkColor}
                opacity={lang === 'en' ? 1 : 0.5}
                onClick={() => setLang('en')}
                _hover={{ opacity: 1 }}
              >
                EN
              </Text>
              <Text color={linkColor} opacity={0.3} userSelect="none">|</Text>
              <Text
                as="button"
                px={1.5}
                py={1}
                cursor="pointer"
                color={lang === 'pt' ? accent : linkColor}
                opacity={lang === 'pt' ? 1 : 0.5}
                onClick={() => setLang('pt')}
                _hover={{ opacity: 1 }}
              >
                PT
              </Text>
            </HStack>
            <Link href={CONFIG.GITHUB} isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<Icon as={FaGithub} />}
                variant="ghost"
                size="sm"
              />
            </Link>
            <Link href={CONFIG.LINKEDIN} isExternal>
              <IconButton
                aria-label="LinkedIn"
                icon={<Icon as={FaLinkedin} />}
                variant="ghost"
                size="sm"
              />
            </Link>
            <IconButton
              aria-label="Toggle color mode"
              icon={<Icon as={colorMode === "dark" ? FaSun : FaMoon} />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
            />
            {/* Hamburger — mobile only */}
            <IconButton
              aria-label={isOpen ? "Close menu" : "Open menu"}
              icon={<Icon as={isOpen ? FaTimes : FaBars} />}
              onClick={onToggle}
              variant="ghost"
              size="sm"
              display={{ base: "flex", md: "none" }}
            />
          </HStack>
        </HStack>
      </Flex>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            overflow="hidden"
            display={{ base: "block", md: "none" }}
            bg={bg}
            borderTop="1px solid"
            borderColor={useColorModeValue("gray.300", "gray.700")}
          >
            <VStack
              align="stretch"
              spacing={0}
              px={5}
              py={3}
            >
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={onClose}
                  py={3}
                  fontSize="md"
                  fontWeight="500"
                  color={linkColor}
                  _hover={{ color: accent, textDecoration: "none" }}
                  borderBottom="1px solid"
                  borderColor={useColorModeValue("gray.200", "gray.800")}
                  _last={{ borderBottom: "none" }}
                >
                  {label}
                </Link>
              ))}
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
