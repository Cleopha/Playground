import React, { useState } from "react";
import {
  Box,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Flex,
} from "@chakra-ui/react";

import { countyName } from "../../../map/county";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose }) => {
  const [locationType, setLocationType] = useState<"coordinates" | "address">(
    "coordinates"
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="8px">
          <ModalHeader> {"Create Alert"} </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input type="text" placeholder="Enter the title" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Enter the description" />
            </FormControl>

            <HStack mb={4}>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Select placeholder="Select the type">
                  <option value="Fire">Fire</option>
                  <option value="Flood">Flood</option>
                  <option value="Earthquake">Earthquake</option>
                  <option value="Storm">Storm</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Severity</FormLabel>
                <Slider defaultValue={5} min={0} max={10} step={1}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormControl>
            </HStack>

            <Box
              borderRadius="8px"
              border="1px solid"
              borderColor="gray.300"
              mb={4}
            >
              <Box>
                <Flex align="center" justify="center">
                  <Button
                    style={{ margin: 0, backgroundColor: "transparent" }}
                    _hover={{ backgroundColor: "transparent" }}
                    variant="ghost"
                    flex="1"
                    colorScheme="blue"
                    isActive={locationType === "coordinates"}
                    borderRight={"1px"}
                    borderRadius="0px"
                    onClick={() => setLocationType("coordinates")}
                  >
                    Coordinate
                  </Button>
                  <Button
                    style={{ margin: 0, backgroundColor: "transparent" }}
                    _hover={{ backgroundColor: "transparent" }}
                    variant="ghost"
                    flex="1"
                    colorScheme="blue"
                    borderRadius="0px"
                    isActive={locationType === "address"}
                    onClick={() => setLocationType("address")}
                  >
                    Address
                  </Button>
                </Flex>
                <Box position="relative" height="3px" width="100%">
                  <Box
                    position="absolute"
                    height="100%"
                    width="50%"
                    bg="#8bceee"
                    transition="transform 0.3s ease-in-out"
                    transform={
                      locationType === "coordinates"
                        ? "translateX(0%)"
                        : "translateX(100%)"
                    }
                  />
                </Box>
              </Box>

              {locationType === "coordinates" ? (
                <HStack py={2} px={4} mb={4}>
                  <FormControl>
                    <FormLabel>Latitude</FormLabel>
                    <Input type="number" placeholder="Enter the latitude" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Longitude</FormLabel>
                    <Input type="number" placeholder="Enter the longitude" />
                  </FormControl>
                </HStack>
              ) : (
                <FormControl py={2} px={4} mb={4}>
                  <FormLabel>Address</FormLabel>
                  <Input type="text" placeholder="Enter the address" />
                </FormControl>
              )}
            </Box>

            <FormControl mb={4}>
              <FormLabel>Department</FormLabel>
              <Select placeholder="Select the department">
                {countyName.map((dept: string, id: number) => (
                  <option key={id} value={dept}>
                    {dept}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="solid" colorScheme="blue">
              {"Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertModal;
