import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  TableContainer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon, RepeatIcon } from "@chakra-ui/icons";
import { alertData } from "../../../fakeData/alert";
import { IAlert } from "../../../utils/alert";
import { sortByAttribute } from "../../../utils/textTransform";
import { iconPerType } from "../../../map/marker";
import { severityColors } from "../../../card/CardAlert";
import AlertModal from "./AlertModal";

const AlertsTable = () => {
  const [sortedAlertData, setSortedAlertData] = useState(alertData);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [modifyAlert, setModifyAlert] = useState<IAlert | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleHeaderClick = (attribute: keyof IAlert) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";

    const sortedData = [...sortedAlertData].sort(
      sortByAttribute<IAlert>(attribute, sortOrder)
    );

    setSortedAlertData(sortedData);
    setSortOrder(newSortOrder);
  };

  return (
    <>
      <Box height="36px">
        <HStack spacing={"20"} ml={3} mt={1}>
          <Text size="sm" fontSize={20}>
            Alerts
          </Text>

          <Box>
            <Button
              textColor={"#90cdf4"}
              leftIcon={<AddIcon />}
              size="sm"
              variant="ghost"
              onClick={() => {
                setModifyAlert(null);
                onOpen();
              }}
            >
              Create
            </Button>
            <Button
              textColor={"#90cdf4"}
              leftIcon={<RepeatIcon />}
              size="sm"
              variant="ghost"
              onClick={() => {
                // Handle the refresh button action
              }}
            >
              Refresh
            </Button>
          </Box>
        </HStack>
      </Box>

      <div style={{ height: "5px" }}>
        <Divider mt="0.5" bg="white" />
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          maxWidth: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableContainer
          m={2}
          display={"block"}
          overflowY="auto"
          width={`calc(100vw - 175px)`}
          maxHeight={`calc(91vh - 60px)`}
        >
          <Table variant={"striped"} size="md">
            <Thead>
              <Tr>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                ></Th>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                  cursor="pointer"
                  onClick={() => handleHeaderClick("type")}
                >
                  Type
                </Th>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                  cursor="pointer"
                  onClick={() => handleHeaderClick("department")}
                >
                  Department
                </Th>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                  cursor="pointer"
                  onClick={() => handleHeaderClick("severity")}
                >
                  Severity
                </Th>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                >
                  Latitude
                </Th>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                >
                  Longitude
                </Th>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                  cursor="pointer"
                  onClick={() => handleHeaderClick("title")}
                >
                  Title
                </Th>
                <Th
                  style={{ position: "sticky", top: 0, background: "#1a202c" }}
                  cursor="pointer"
                  onClick={() => handleHeaderClick("description")}
                >
                  Description
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedAlertData.map((alert: IAlert) => (
                <Tr key={alert.id}>
                  <Td>
                    <EditIcon
                      color="blue.500"
                      _hover={{ color: "blue.700", cursor: "pointer" }}
                      onClick={() => {
                        setModifyAlert(alert);
                        onOpen();
                      }}
                      mr={2}
                    />
                    <DeleteIcon
                      color="red.500"
                      _hover={{ color: "red.700", cursor: "pointer" }}
                      // TODO Remove in list
                      // onClick={() => console.log("Supprimer", alert.id)}
                    />
                  </Td>

                  <Td>
                    <HStack>
                      <Image
                        mb={2}
                        src={iconPerType[alert.type]}
                        boxSize={"30px"}
                      />
                      <Text>{alert.type}</Text>
                    </HStack>
                  </Td>
                  <Td>{alert.department}</Td>
                  <Td textColor={severityColors[alert.severity]}>
                    {alert.severity}
                  </Td>
                  <Td>{alert.lat}</Td>
                  <Td>{alert.lng}</Td>
                  <Td>{alert.title}</Td>
                  <Td>{alert.description}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>

      <AlertModal isOpen={isOpen} onClose={onClose} modifyAlert={modifyAlert} />
    </>
  );
};

export default AlertsTable;
