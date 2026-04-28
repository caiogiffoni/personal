import { IconButton, Icon } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MotionBox } from "../lib/motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          position="fixed"
          bottom={{ base: 5, md: 8 }}
          right={{ base: 5, md: 8 }}
          zIndex={200}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Back to top"
            icon={<Icon as={FaArrowUp} />}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            colorScheme="green"
            borderRadius="full"
            size="md"
            boxShadow="lg"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
