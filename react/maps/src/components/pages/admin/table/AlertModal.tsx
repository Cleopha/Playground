import React, { useState, useEffect } from "react";
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
  Flex,
} from "@chakra-ui/react";

import { countyName } from "../../../map/county";
import { IAlert } from "../../../utils/alert";
import { iconPerType } from "../../../map/marker";
import SliderSeverity from "../../../input/SliderSeverity";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  modifyAlert: IAlert | null;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  modifyAlert,
}) => {
  const [locationType, setLocationType] = useState<"coordinates" | "address">(
    "coordinates"
  );
  const options = [
    { label: "Weather", value: "WEATHER" },
    { label: "Security", value: "SECURITY" },
    { label: "Health", value: "HEALTH" },
    { label: "Fire", value: "FIRE" },
  ];
  const [selectedValue, setSelectedValue] = useState<
    "WEATHER" | "SECURITY" | "HEALTH" | "FIRE"
  >(modifyAlert ? modifyAlert.type : "FIRE");

  const [severity, setSeverity] = useState<number>(5);

  useEffect(() => {
    setSelectedValue(modifyAlert ? modifyAlert.type : "FIRE");
    setSeverity(modifyAlert ? modifyAlert.severity : 5);
  }, [modifyAlert]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="8px">
          <ModalHeader>
            {modifyAlert ? "Update Alert" : "Create Alert"}{" "}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                defaultValue={modifyAlert ? modifyAlert.title : ""}
                type="text"
                placeholder="Enter the title"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                defaultValue={modifyAlert ? modifyAlert.description : ""}
                placeholder="Enter the description"
              />
            </FormControl>

            <HStack mb={4}>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Select
                  defaultValue={modifyAlert ? modifyAlert.type : "FIRE"}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedValue(
                      e.target.value as
                        | "WEATHER"
                        | "SECURITY"
                        | "HEALTH"
                        | "FIRE"
                    )
                  }
                  icon={<img src={iconPerType[selectedValue]} />}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Severity</FormLabel>
                <SliderSeverity severity={severity} setSeverity={setSeverity} />
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
                    <Input
                      defaultValue={modifyAlert ? modifyAlert.lat : ""}
                      type="number"
                      placeholder="Enter the latitude"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Longitude</FormLabel>
                    <Input
                      defaultValue={modifyAlert ? modifyAlert.lng : ""}
                      type="number"
                      placeholder="Enter the longitude"
                    />
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
              <Select
                defaultValue={modifyAlert ? modifyAlert.department : ""}
                placeholder="Select the department"
              >
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
              {modifyAlert ? "Save" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertModal;
