import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";

import { FaTrash } from "react-icons/fa";
import { InputElement } from "../../components/Form/InputElement";
import { InputLabel } from "../../components/Form/InputLabel";
import { SelectElement } from "../../components/Form/SelectElement";
import { ButtonElement } from "../../components/Button";
import { ListItens } from "../../components/ListItens";

import { useEffect, useMemo, useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { IoIosArrowBack } from "react-icons/io";

export function NewInvoice() {
  const { stateToggle, off } = useToggle();
  const [isSmallScreen, setSmallScreen] = useState(false);

  const isSmall = useBreakpointValue({
    md: true,
  });

  useEffect(() => {
    const stateScreen = isSmall ? false : true;
    setSmallScreen(stateScreen);
  }, [isSmall]);

  return (
    <Box
      w="100%"
      position="fixed"
      left={stateToggle ? "-520px" : ["0", "0", "70px", "70px"]}
      top={["40px", "70px", "0", "0"]}
      overflowY="scroll"
      zIndex="1"
      transition="0.6s"
      h="100%"
      maxW={["100%", "100%", "500px"]}
      mx="auto"
      p={["0.5rem", "1.5rem"]}
      bg="blue.800"
    >
      <Button
        mb="0"
        opacity={isSmallScreen ? "1" : "0"}
        display={isSmallScreen ? "block" : "none"}
        leftIcon={<Icon as={IoIosArrowBack} color="purple.light" />}
        onClick={() => off()}
        fontWeight="700"
        fontSize={["0.5rem", "0.75rem"]}
        color="white"
      >
        Go back
      </Button>

      <Heading
        fontFamily="Spartan"
        fontSize="1.5rem"
        fontWeight="700"
        color="white"
        mb="0.75rem"
      >
        New Invoice
      </Heading>
      <Heading
        fontFamily="Spartan"
        fontSize={["0.7rem"]}
        fontWeight="700"
        color="purple.dark"
        mb="0.75rem"
      >
        Bill From
      </Heading>

      <Box mb="0.75rem">
        <InputLabel htmlFor="address">Street Address</InputLabel>
        <InputElement type="text" id="address" />
      </Box>

      <Flex flexDirection={["column", "row"]} gap="0.75rem" mb="0.75rem">
        <Box>
          <InputLabel htmlFor="city">City</InputLabel>
          <InputElement type="text" id="city" />
        </Box>

        <Box>
          <InputLabel htmlFor="code">Post Code</InputLabel>
          <InputElement type="text" id="code" />
        </Box>

        <Box>
          <InputLabel htmlFor="country">Country</InputLabel>
          <InputElement type="text" id="country" />
        </Box>
      </Flex>

      <Heading
        fontFamily="Spartan"
        fontSize="0.7rem"
        fontWeight="700"
        color="purple.dark"
        mb="0.75rem"
      >
        Bill To
      </Heading>

      <Box mb="0.75rem">
        <InputLabel htmlFor="name">Client`s Name</InputLabel>
        <InputElement type="text" id="name" />
      </Box>

      <Box mb="0.75rem">
        <InputLabel htmlFor="email">Client`s Email</InputLabel>
        <InputElement type="email" id="email" />
      </Box>

      <Box mb="0.75rem">
        <InputLabel htmlFor="addr">Street address</InputLabel>
        <InputElement type="text" id="addr" />
      </Box>

      <Flex flexDirection={["column", "row"]} gap="0.75rem" mb="0.75rem">
        <Box>
          <InputLabel htmlFor="cit">City</InputLabel>
          <InputElement type="text" id="cit" />
        </Box>

        <Box>
          <InputLabel htmlFor="cod">Post Code</InputLabel>
          <InputElement type="text" id="cod" />
        </Box>

        <Box>
          <InputLabel htmlFor="countr">Country</InputLabel>
          <InputElement type="text" id="countr" />
        </Box>
      </Flex>

      <Flex flexDirection={["column", "row"]} gap="0.75rem" mb="0.75rem">
        <Box>
          <InputLabel htmlFor="date">Invoice Date</InputLabel>
          <InputElement type="date" id="date" />
        </Box>

        <Box w="100%">
          <InputLabel htmlFor="payment">Payment terms</InputLabel>
          <SelectElement
            borderColor="ebony"
            bg="mirage"
            color="white"
            fontSize="0.75rem"
            borderWidth="1px"
            borderRadius="0.25rem"
            options={["Net day 1", "Net days 7", "Net days 14", "Net days 30"]}
          />
        </Box>
      </Flex>

      <Box mb="0.75rem">
        <InputLabel htmlFor="desc">Project description</InputLabel>
        <InputElement type="text" id="desc" />
      </Box>

      <Heading
        color="gray"
        fontSize={["0.75rem", "1.125rem"]}
        fontWeight="700"
        mt="10"
        mb="0.75rem"
        fontFamily="Spartan"
      >
        Item List
      </Heading>

      <ListItens />

      <ButtonElement
        bg="otherDark"
        mt="8"
        w="100%"
        mb="2.75rem"
        _hover={{ bg: "darkAccent" }}
      >
        + Add new Item
      </ButtonElement>

      <Flex gap="0.5rem" mb="3rem">
        <ButtonElement bg="otherDark" _hover={{ bg: "darkAccent" }}>
          Cancel
        </ButtonElement>
        <ButtonElement bg="purple.dark" _hover={{ bg: "purple.light" }}>
          Save Changes
        </ButtonElement>
      </Flex>
    </Box>
  );
}
