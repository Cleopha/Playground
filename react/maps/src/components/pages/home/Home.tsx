import React from "react";
import { Heading, Text, Stack, Box, Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex height="91vh" width="100vw" justifyContent={"center"}>
      <Stack
        h="100%"
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 30 }}
        py={{ base: 20, md: 36 }}
        height={"63vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <div id="Welcome Message">
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Welcome to{" "}
            <Text as={"span"} color={"blue.500"}>
              SafetyHub
            </Text>
          </Heading>
        </div>
        <div id="Sub-text">
          <Text
            color={"white.800"}
            fontSize={{ base: "2xl", sm: "4xl", md: "1xl" }}
            fontStyle={"italic"}
          >
            Your Central Hub For Health, Weather, Fire, and Security
          </Text>
        </div>
      </Stack>
    </Flex>
  );
};
