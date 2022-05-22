import { InputHTMLAttributes } from "react";
import { FormLabel } from "@chakra-ui/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
}

export function InputLabel({ children, htmlFor }: InputProps) {
  return (
    <FormLabel
      htmlFor={htmlFor}
      fontSize={["0.5rem", "0.75rem"]}
      color="white"
      fontWeight={["400", "500"]}
    >
      {children}
    </FormLabel>
  );
}
