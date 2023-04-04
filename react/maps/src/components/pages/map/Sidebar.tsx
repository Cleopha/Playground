import React, { useEffect } from "react";
import {
  Box,
  Divider,
  Text,
  Flex,
  Checkbox,
  HStack,
  Image,
  Stack,
  Input,
  Grid,
  Button,
} from "@chakra-ui/react";
import { CardAlert } from "../../card/CardAlert";
import Multiselect from "../../input/Multiselect";
import { iconPerType } from "../../map/marker";
import { toPascalCase } from "../../utils/textTransform";
import { alertData } from "../../fakeData/alert";
import { IAlert } from "../../utils/alert";
import { useMapContext } from "./MapContext";

export default function Sidebar() {
  const { selectedMarker, searchOptions, setSearchOptions, cardRefs } =
    useMapContext();

  const handleCheckboxChange = (label: string, newValue: boolean) => {
    setSearchOptions({
      ...searchOptions,
      checkboxes: {
        ...searchOptions.checkboxes,
        [label]: newValue,
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOptions({
      ...searchOptions,
      input: e.target.value,
    });
  };

  useEffect(() => {
    if (selectedMarker !== null) {
      const index = alertData.findIndex(
        (item) => item.id === selectedMarker.id
      );
      if (index !== -1 && cardRefs.current[index]) {
        cardRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedMarker, cardRefs]);

  return (
    <Box>
      <Divider mb="2" bg="white" />

      <Multiselect />

      <Flex flexWrap="wrap" gap={6}>
        {Object.entries(iconPerType).map(([label, imageUrl]) => (
          <Flex key={label} alignItems="center">
            <Checkbox
              defaultChecked
              onChange={(e) => handleCheckboxChange(label, e.target.checked)}
            >
              <HStack minWidth="110px">
                <Image src={imageUrl} marginRight={2} />
                <Text textColor={"white"}>{toPascalCase(label)}</Text>
              </HStack>
            </Checkbox>
          </Flex>
        ))}
      </Flex>

      <Divider mt="4" bg="white" />

      <Stack direction="column" mr="1">
        <Text mt="2" textColor={"gray.200"}>
          Content Search
        </Text>
        <Input
          onChange={handleInputChange}
          bg="#232934"
          _hover={{ backgroundColor: "#272d38" }}
          _placeholder={{ color: "gray.500" }}
          placeholder="Content Search..."
          variant="filled"
          textColor={"white"}
        />
      </Stack>

      <Grid templateColumns="1fr auto" alignItems="center">
        <Divider h="2px" bg="white" />
        <Button
          ml="1"
          mt="1"
          colorScheme={"cyan"}
          size="sm"
          lineHeight="1"
          // TODO Search
          // onClick={() => console.log(searchOptions)}
        >
          Search
        </Button>
      </Grid>

      <Text mt="2" textColor={"gray.200"}>
        Result
      </Text>
      <Box maxHeight="calc(100vh - 395px)" overflow="auto">
        {alertData.map((item: IAlert, id: number) => (
          <CardAlert
            key={id}
            ref={(el: HTMLElement) => {
              cardRefs.current[id] = el;
            }}
            alert={item}
          />
        ))}
      </Box>
    </Box>
  );
}
