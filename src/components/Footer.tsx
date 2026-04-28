import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const borderColor = useColorModeValue("gray.300", "gray.800");
  const subColor = useColorModeValue("gray.500", "gray.600");
  const accent = useColorModeValue("blue.500", "green.400");

  return (
    <Box
      as="footer"
      py={6}
      textAlign="center"
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Text fontSize="sm" color={subColor}>
        <Text as="span" color={accent} fontFamily="mono">
          Caio Giffoni
        </Text>{" "}
        © 2026
      </Text>
    </Box>
  );
};

export default Footer;
