import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import NavigationPad from "./NavigationPad";
import Window from "./Window";

function App() {
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);

  const onButtonClick = (index: number) => {
    setActiveWindowIndex(index);
  };
  const columnCount = 3;
  const rowCount = 3;

  return (
    <ChakraProvider>
      <NavigationPad
        activeWindowIndex={activeWindowIndex}
        onButtonClick={onButtonClick}
      />
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${columnCount}, 1fr)`}
        gridTemplateRows={`repeat(${rowCount}, 1fr)`}
        gridGap="4"
        height="100vh"
        overflow="scroll"
        scrollSnapType="both mandatory"
        scrollPadding="1px"
      >
        {[...Array(columnCount * rowCount)].map((_, i) => (
          <Window key={i} index={i} activeWindowIndex={i}/>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default App;
