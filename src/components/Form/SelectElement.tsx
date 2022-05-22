import { SelectProps, Select } from "@chakra-ui/react";

interface SelectElementProps extends SelectProps {
  options: string[];
}

export function SelectElement({ options, ...rest }: SelectElementProps) {
  return (
    <Select
      color="white"
      fontWeight="bold"
      h={["2rem", "3rem"]}
      iconColor="purple.dark"
      {...rest}
    >
      {options.map((option, key) => (
        <option
          key={key}
          style={{ backgroundColor: "#141625ff" }}
          value={option}
        >
          {option}
        </option>
      ))}
    </Select>
  );
}
