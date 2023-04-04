import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { countyName } from "../../../../map/county";

interface DepartmentSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DepartmentSelect: React.FC<DepartmentSelectProps> = ({
  value,
  onChange,
}) => (
  <FormControl mb={4}>
    <FormLabel>Department</FormLabel>
    <Select name="department" defaultValue={value} onChange={onChange}>
      {countyName.map((dept: string, id: number) => (
        <option key={id} value={dept}>
          {dept}
        </option>
      ))}
    </Select>
  </FormControl>
);

export default DepartmentSelect;
