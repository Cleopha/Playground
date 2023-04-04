import React, { useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import apiClient from "../../../sdk/safetyHubAPI/ApiClient";

export const SignIn = () => {
  // TODO Remove This just for example
  useEffect(() => {
    apiClient.auth
      .login("admin@example.com", "password3")
      .then(() => {
        // console.log("Login success !", response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // console.log("Error login : unAuthorized");
        } else {
          // console.error("error login :", error.message);
        }
      });
  }, []);

  return (
    <Flex
      height="91vh"
      width="100vw"
      minH={"88vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in</Heading>
          <Text fontSize={"lg"} color={"blue.600"}>
            to use certain features!
          </Text>
        </Stack>
        <Box
          rounded={"xl"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"2xl"}
          p={5}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
