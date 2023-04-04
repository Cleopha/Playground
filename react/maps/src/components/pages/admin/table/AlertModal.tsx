import React, { useState, useEffect } from "react";
import {
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
} from "@chakra-ui/react";

import { IAlert } from "../../../utils/alert";
import SliderSeverity from "../../../input/SliderSeverity";
import TitleInput from "./FormAlert/TitleInput";
import DrescriptionInput from "./FormAlert/DescriptionInput";
import TypeSelect from "./FormAlert/TypeSelect";
import DepartmentSelect from "./FormAlert/DepartmentSelect";
import { useFormValidation } from "./FormAlert/hooks/useFormValidation";
import LocationInput from "./FormAlert/LocationInput";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  modifyAlert: IAlert | null;
}

export interface FormValues {
  title: string;
  description: string;
  lat: number;
  lng: number;
  address: string;
  department: string;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  modifyAlert,
}) => {
  const [locationType, setLocationType] = useState<"coordinates" | "address">(
    "coordinates"
  );
  const [selectedType, setSelectedType] = useState<
    "WEATHER" | "SECURITY" | "HEALTH" | "FIRE"
  >(modifyAlert ? modifyAlert.type : "FIRE");
  const [severity, setSeverity] = useState<number>(5);

  const [formValues, setFormValues] = useState<FormValues>({
    address: "",
    lat: modifyAlert ? modifyAlert.lat : 0,
    lng: modifyAlert ? modifyAlert.lng : 0,
    title: modifyAlert ? modifyAlert.title : "",
    description: modifyAlert ? modifyAlert.description : "",
    department: modifyAlert ? modifyAlert.department : "San Francisco",
  });

  const { formErrors, setFormErrors, validateForm } = useFormValidation({
    title: "",
    description: "",
    lat: "",
    lng: "",
    address: "",
  });

  const handleSubmit = () => {
    if (validateForm(formValues, locationType)) {
      // TODO if create or modify send good request create on route prisma upsert
      onClose();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(
      e.target.value as "WEATHER" | "SECURITY" | "HEALTH" | "FIRE"
    );
  };

  useEffect(() => {
    setSelectedType(modifyAlert ? modifyAlert.type : "FIRE");
    setSeverity(modifyAlert ? modifyAlert.severity : 5);

    setFormValues({
      address: "",
      lat: modifyAlert ? modifyAlert.lat : 0,
      lng: modifyAlert ? modifyAlert.lng : 0,
      title: modifyAlert ? modifyAlert.title : "",
      description: modifyAlert ? modifyAlert.description : "",
      department: modifyAlert ? modifyAlert.department : "San Francisco",
    });
  }, [modifyAlert]);

  useEffect(() => {
    setFormErrors({
      title: "",
      description: "",
      lat: "",
      lng: "",
      address: "",
    });
  }, [isOpen, setFormErrors]);

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
            <TitleInput
              value={modifyAlert ? modifyAlert.title : ""}
              error={formErrors.title}
              onChange={handleChange}
            />

            <DrescriptionInput
              value={modifyAlert ? modifyAlert.description : ""}
              error={formErrors.description}
              onChange={handleChange}
            />

            <HStack mb={4}>
              <TypeSelect
                value={modifyAlert ? modifyAlert.type : "FIRE"}
                selectedType={selectedType}
                onChange={handleTypeChange}
              />

              <FormControl>
                <FormLabel>Severity</FormLabel>
                <SliderSeverity severity={severity} setSeverity={setSeverity} />
              </FormControl>
            </HStack>

            <LocationInput
              locationType={locationType}
              setLocationType={setLocationType}
              modifyAlert={modifyAlert}
              formErrors={{
                lat: formErrors.lat,
                lng: formErrors.lng,
                address: formErrors.address,
              }}
              onChange={handleChange}
            />

            <DepartmentSelect
              value={modifyAlert ? modifyAlert.department : "San Francisco"}
              onChange={handleChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="solid" colorScheme="blue">
              {modifyAlert ? "Save" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertModal;
