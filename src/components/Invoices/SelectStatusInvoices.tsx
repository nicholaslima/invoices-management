import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Icon,
  Input,
  Select,
  useBreakpointValue,
  useCheckbox,
} from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CheckBoxElement } from "../Form/CheckBoxElement";

export function SelectStatusInvoices() {
  const [status, setStatus] = useState();
  const [descriptionSelect, setDescriptionSelect] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const changeStatus = useCallback((a: any) => {
    setStatus(a.target.value);
  }, []);

  useEffect(() => {
    isWideVersion
      ? setDescriptionSelect("Filter by Status")
      : setDescriptionSelect("Filter");
  }, [isWideVersion]);

  return (
    <Box position="relative">
      <Button
        color="white"
        border="0px solid blue.dark"
        outline="0px"
        bg="blue.600"
        w={["90px", "110px", "180px"]}
        fontWeight="bold"
        onClick={() => setIsOpen(!isOpen)}
        rightIcon={<Icon as={IoIosArrowDown} color="purple.dark" />}
        onChange={(a) => changeStatus(a)}
      >
        {descriptionSelect}
      </Button>
      {isOpen && (
        <Flex
          p="1.7rem"
          flexDirection="column"
          bg="ebony"
          position="absolute"
          top="3.2rem"
          right="0"
          gap="0.5rem"
          zIndex="3"
          borderRadius="7px"
          w="250px"
          cursor="pointer"
        >
          <CheckBoxElement value="Draft" />
          <CheckBoxElement value="Pending" />
          <CheckBoxElement value="Paid" />
        </Flex>
      )}
    </Box>
  );
}
