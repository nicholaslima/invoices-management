import { Button, ButtonProps } from "@chakra-ui/react";

export function ButtonElement({ children, ...rest }: ButtonProps) {
  return (
    <Button
      borderRadius="25px"
      color="white"
      transition="0.6s"
      fontWeight="700"
      py="4"
      px="6"
      fontSize="0.75rem"
      {...rest}
    >
      {children}
    </Button>
  );
}
