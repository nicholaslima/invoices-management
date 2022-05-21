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
} from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";

import { FaTrash } from "react-icons/fa";
import { InputElement } from "../../components/Form/InputElement";
import { InputLabel } from "../../components/Form/InputLabel";
import { SelectElement } from "../../components/Form/SelectElement";
import { ButtonElement } from "../../components/Button";
import { ListItens } from "../../components/ListItens";

export function NewInvoice() {
  return (
    <Box
      w="100%"
      position="fixed"
      left={["0px", "0px", "70", "70px"]}
      top={["70px", "70", "0", "0"]}
      overflowY="scroll"
      zIndex="1"
      h="100%"
      maxW="500px"
      mx="auto"
      p="1.5rem"
      bg="blue.800"
    >
      <Heading
        fontFamily="Spartan"
        fontSize="1.5rem"
        fontWeight="700"
        color="white"
        mb="5"
      >
        New Invoice
      </Heading>
      <Heading
        fontFamily="Spartan"
        fontSize="0.7rem"
        fontWeight="700"
        color="purple.dark"
        mb="1.5rem"
      >
        Bill From
      </Heading>

      <Box mb="0.75rem">
        <InputLabel htmlFor="address">Street Address</InputLabel>
        <InputElement type="text" id="address" />
      </Box>

      <HStack spacing="2" mb="8">
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
      </HStack>

      <Heading
        fontFamily="Spartan"
        fontSize="0.7rem"
        fontWeight="700"
        color="purple.dark"
        mb="1.5rem"
      >
        Bill To
      </Heading>
      <FormControl>
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

        <HStack spacing="2" mb="8">
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
        </HStack>

        <HStack spacing="2" mb="8">
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
              borderWidth="2px"
              h="3rem"
              borderRadius="0.25rem"
              options={[
                "Net day 1",
                "Net days 7",
                "Net days 14",
                "Net days 30",
              ]}
            />
          </Box>
        </HStack>

        <Box mb="0.75rem">
          <InputLabel htmlFor="desc">Project description</InputLabel>
          <InputElement type="text" id="desc" />
        </Box>

        <Heading
          color="gray"
          fontSize="1.125rem"
          fontWeight="700"
          mt="10"
          mb="6"
        >
          Item List
        </Heading>

        <ListItens />

        <ButtonElement
          bg="otherDark"
          mt="8"
          w="100%"
          mb="10"
          _hover={{ bg: "darkAccent" }}
        >
          + Add new Item
        </ButtonElement>

        <HStack float="right" spacing="2" mb="10">
          <ButtonElement bg="otherDark" _hover={{ bg: "darkAccent" }}>
            Cancel
          </ButtonElement>
          <ButtonElement bg="purple.dark" _hover={{ bg: "purple.light" }}>
            Save Changes
          </ButtonElement>
        </HStack>
      </FormControl>
    </Box>
  );
}
