import { Box, Flex, FormLabel, useCheckbox } from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";

interface checkBoxProps {
  value: string;
}

export function CheckBoxElement({ value }: checkBoxProps) {
  const { htmlProps, getLabelProps, getInputProps, getCheckboxProps, state } =
    useCheckbox();
  return (
    <FormLabel
      display="flex"
      flexDirection="row"
      gap="1rem"
      alignItems="center"
      p="0"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden></input>
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="mirage"
        w="5"
        borderRadius="2"
        h="5"
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <Flex
            w="5"
            h="5"
            bg="purple.dark"
            alignItems="center"
            justify="center"
          >
            <BsCheck color="white"></BsCheck>
          </Flex>
        )}
      </Flex>
      <Box
        as="span"
        color="white"
        fontSize="0.8rem"
        fontWeight="bold"
        {...getLabelProps()}
      >
        {value}
      </Box>
    </FormLabel>
  );
}
