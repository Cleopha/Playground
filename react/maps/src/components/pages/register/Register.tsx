import React from "react";
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

export const Register = () => {
  return (
    <Flex
      height="91vh"
      width="100vw"
      minH={"85vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Account Registration</Heading>
          <Text fontSize={"lg"} color={"blue.600"}>
            Create an account to gain access to certain features!
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
              <FormLabel>E-mail</FormLabel>
              <Input type="email" placeholder="Please enter e-mail address" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Please enter password" />
            </FormControl>
            <FormControl id="password2">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password2" placeholder="Please confirm password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>
                  I Accept the{" "}
                  <Link color={"blue.400"}>Terms of Service Agreement</Link>
                </Checkbox>
              </Stack>
              <Checkbox>I am at least 13 years of age</Checkbox>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
