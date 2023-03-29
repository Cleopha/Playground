import { Box, Grid, GridItem } from "@chakra-ui/react";

type NavigationPadProps = {
  activeWindowIndex: number;
  onButtonClick: (index: number) => void;
};

const NavigationPad: React.FC<NavigationPadProps> = ({
  activeWindowIndex,
  onButtonClick,
}) => {
  return (
    <Box
      position="fixed"
      top="2rem"
      left="2rem"
      display="flex"
      flexDirection="column"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={2} bg="red">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <GridItem key={index}>
            <Box
            //bg="black"
              w="1.5rem"
              h="1.5rem"
              bg={activeWindowIndex === index ? "blue.400" : "gray.400"}
              cursor="pointer"
              onClick={() => onButtonClick(index)}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default NavigationPad;
