import { InputHTMLAttributes } from "react";
import { FormLabel } from "@chakra-ui/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
}

export function InputLabel({ children, htmlFor }: InputProps) {
  return (
    <FormLabel
      htmlFor={htmlFor}
      fontSize="0.75rem"
      color="gray"
      fontWeight="600"
    >
      {children}
    </FormLabel>
  );
}
