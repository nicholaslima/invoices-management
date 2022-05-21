import { InputHTMLAttributes } from "react";
import { Input } from "@chakra-ui/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

export function InputElement({ id, type }: InputProps) {
  return (
    <Input
      id={id}
      type={type}
      fontWeight="bold"
      borderColor="ebony"
      bg="mirage"
      color="white"
      fontSize="16"
      borderWidth="2px"
      h="3rem"
      borderRadius="0.25rem"
    />
  );
}
