import { Box } from "@chakra-ui/react";

type WindowProps = {
  index: number;
  activeWindowIndex: number;
};

const Window: React.FC<WindowProps> = ({ index, activeWindowIndex }) => {
  return (
    <Box
      height="100vh"
      w={"100vw"}
      bg={activeWindowIndex === index ? "blue.400" : "gray.200"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="6xl"
      fontWeight="bold"
      scrollSnapAlign="start"
    >
      Window {index + 1}
    </Box>
  );
};

export default Window;
