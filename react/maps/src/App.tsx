import React from "react";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ChakraProps,
} from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { mode } from "@chakra-ui/theme-tools";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import MapPage from "./components/pages/map/MapPage";
import AlertAdminPanel from "./components/pages/admin/AdminPanel";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  styles: {
    global: (props: ChakraProps) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
        color: mode("gray.900", "gray.50")(props),
      },
    }),
  },
});

function App() {
  const location = useLocation();
  const isMapPage = location.pathname === "/Map";

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/Map" element={<MapPage />} />
          <Route path="/Admin" element={<AlertAdminPanel />} />
        </Routes>
        {isMapPage ? null : <Footer />}
      </ChakraProvider>
    </>
  );
}

export default App;
