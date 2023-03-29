import { Box } from "@chakra-ui/react";

const GridWindow = () => {
  return (
    <Box
      bg="blue"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="4xl"
      fontWeight="bold"
      scrollSnapAlign="start"
      h="100vh"
      w="100vw"
    >
      Grid Window
    </Box>
  );
};

export default GridWindow;
