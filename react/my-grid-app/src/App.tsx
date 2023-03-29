import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import NavigationPad from "./NavigationPad";
import Window from "./Window";

function App() {
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const [windowRefs, setWindowRefs] = useState<Record<number, HTMLDivElement>>({});
  const containerRef = useRef<HTMLDivElement>(null);



  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const x = containerRef.current.scrollLeft;
    const y = containerRef.current.scrollTop;

    // Calculate the row and column indices based on the scroll offset
    const col = Math.floor(x / containerRef.current.clientWidth);
    const row = Math.floor(y / containerRef.current.clientHeight);

    // Calculate the index of the active window based on the row and column indices
    const index = row * columnCount + col;

    setActiveWindowIndex(index);
  };

  const onButtonClick = (index: number) => {
    setActiveWindowIndex(index);

    // Get the corresponding window element reference and scroll to it
    if (windowRefs[index]) {
      windowRefs[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const setWindowRef = (index: number, ref: HTMLDivElement) => {
    // Set the reference to the corresponding window element
    setWindowRefs((prev) => ({ ...prev, [index]: ref }));
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
        ref={containerRef} // Attach the ref to the container
        onScroll={onScroll}

      >
        {[...Array(columnCount * rowCount)].map((_, i) => (
          <Window key={i} index={i} activeWindowIndex={activeWindowIndex} setWindowRef={setWindowRef} setActiveWindowIndex={setActiveWindowIndex} />
        ))}
      </Box>
    </ChakraProvider>
  );
}


export default App;
