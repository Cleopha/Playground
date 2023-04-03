import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const bg = useColorModeValue("white", "#1a202c");
  const mobileNav = useDisclosure();
  const nav = useNavigate();

  return (
    <Box
      as="nav"
      role="navigation"
      bg={useColorModeValue("gray.50", "#1a202c")}
      color={useColorModeValue("gray.700", "gray.200")}
      w={"100vw"}
      h="5vh"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <Button
            fontWeight={"medium"}
            style={{ backgroundColor: "transparent" }}
            ml="2"
            fontSize="2xl"
            variant="ghost"
            onClick={() => nav("/")}
          >
            SafetyHub
          </Button>
        </Flex>

        <HStack display="flex" alignItems="center" spacing={2}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            <Button
              size="sm"
              color={"black"}
              colorScheme={"cyan"}
              onClick={() => nav("Register")}
            >
              Register
            </Button>
            <Button variant="link" p={3} onClick={() => nav("SignIn")}>
              Sign in
            </Button>
            <Button variant="link" p={3} onClick={() => nav("about-us")}>
              About us
            </Button>
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{ color: "inherit" }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="md"
              shadow="md"
              borderRadius={20}
              zIndex={2}
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
              <Button
                variant="link"
                w="full"
                p={3}
                onClick={() => nav("about-us")}
              >
                About us
              </Button>

              <Button variant="link" w="full" onClick={() => nav("SignIn")}>
                Sign in
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};
