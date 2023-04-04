import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { iconPerType } from "../../../../map/marker";

interface TypeSelectProps {
  value: string;
  selectedType: "WEATHER" | "SECURITY" | "HEALTH" | "FIRE";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  { label: "Weather", value: "WEATHER" },
  { label: "Security", value: "SECURITY" },
  { label: "Health", value: "HEALTH" },
  { label: "Fire", value: "FIRE" },
];

const TypeSelect: React.FC<TypeSelectProps> = ({
  value,
  selectedType,
  onChange,
}) => (
  <FormControl>
    <FormLabel>Type</FormLabel>
    <Select
      defaultValue={value}
      onChange={onChange}
      icon={<img src={iconPerType[selectedType]} />}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  </FormControl>
);

export default TypeSelect;
