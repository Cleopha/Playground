import { Box } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";

type WindowProps = {
  index: number;
  activeWindowIndex: number;
  setWindowRef: (index: number, ref: HTMLDivElement) => void;
  setActiveWindowIndex: any
};

const Window: React.FC<WindowProps> = ({
  index,
  activeWindowIndex,
  setWindowRef,
  setActiveWindowIndex
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Pass the ref to the parent component using the callback
  React.useEffect(() => {
    console.log("ok1")

    if (ref.current) {
      setWindowRef(index, ref.current);
    }
  }, [index]);

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
      ref={ref} // Attach the ref to the element
      onClick={() => {
        setActiveWindowIndex(index)
      }}
    >
      Window {index + 1}
    </Box>
  );
};

export default Window;
