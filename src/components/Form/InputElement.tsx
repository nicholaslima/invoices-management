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
      fontWeight="700"
      borderColor="ebony"
      p="0 0.5rem"
      bg="mirage"
      color="white"
      fontSize={["8", "16"]}
      borderWidth="1px"
      h={["2rem", "3rem"]}
      borderRadius="0.25rem"
    />
  );
}
