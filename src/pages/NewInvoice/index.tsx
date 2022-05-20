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

export default function NewInvoice() {
  return (
    <Flex flexDirection={["column", "row"]} h="100%">
      <Sidebar></Sidebar>
      <Box w="100%" maxW="800px" h="100%" mx="auto" p="16" bg="blue.800">
        <Heading color="white" mb="12">
          New Invoice
        </Heading>
        <FormControl>
          <Box mb="6">
            <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
              Client`s Name
            </FormLabel>
            <Input
              id="client-name"
              type="text"
              fontWeight="bold"
              borderColor="blue.700"
              bg="blue.700"
              color="white"
              fontSize="16"
              borderWidth="2px"
              py="7"
              borderRadius="8px"
            />
          </Box>

          <Box mb="6">
            <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
              Client`s Email
            </FormLabel>
            <Input
              id="client-name"
              type="email"
              fontWeight="bold"
              borderColor="blue.700"
              bg="blue.700"
              color="white"
              fontSize="16"
              borderWidth="2px"
              py="7"
              borderRadius="8px"
            />
          </Box>

          <Box mb="6">
            <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
              Street address
            </FormLabel>
            <Input
              id="client-name"
              type="text"
              borderColor="blue.700"
              bg="blue.700"
              color="white"
              fontWeight="bold"
              fontSize="16"
              borderWidth="2px"
              py="7"
              borderRadius="8px"
            />
          </Box>

          <HStack spacing="8" mb="8">
            <Box>
              <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
                City
              </FormLabel>
              <Input
                id="client-name"
                type="text"
                borderColor="blue.700"
                bg="blue.700"
                color="white"
                fontWeight="bold"
                fontSize="16"
                borderWidth="2px"
                py="7"
                borderRadius="8px"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
                Post Code
              </FormLabel>
              <Input
                id="client-name"
                type="text"
                borderColor="blue.700"
                bg="blue.700"
                color="white"
                fontWeight="bold"
                fontSize="16"
                borderWidth="2px"
                py="7"
                borderRadius="8px"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
                Country
              </FormLabel>
              <Input
                id="client-name"
                type="text"
                borderColor="blue.700"
                bg="blue.700"
                color="white"
                fontWeight="bold"
                fontSize="16"
                borderWidth="2px"
                py="7"
                borderRadius="8px"
              />
            </Box>
          </HStack>

          <HStack spacing="8" mb="8">
            <Box>
              <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
                Invoice Date
              </FormLabel>
              <Input
                id="client-name"
                type="text"
                borderColor="blue.700"
                bg="blue.700"
                color="white"
                fontWeight="bold"
                fontSize="16"
                borderWidth="2px"
                py="7"
                borderRadius="8px"
              />
            </Box>

            <Box>
              <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
                Payment Terms
              </FormLabel>
              <Input
                id="client-name"
                type="text"
                borderColor="blue.700"
                bg="blue.700"
                color="white"
                fontWeight="bold"
                fontSize="16"
                borderWidth="2px"
                py="7"
                borderRadius="8px"
              />
            </Box>
          </HStack>

          <Box>
            <FormLabel htmlFor="client-name" color="gray" fontWeight="bold">
              Project description
            </FormLabel>
            <Input
              id="client-name"
              type="text"
              borderColor="blue.700"
              bg="blue.700"
              color="white"
              fontWeight="bold"
              fontSize="16"
              borderWidth="2px"
              py="7"
              borderRadius="8px"
            />
          </Box>

          <Heading color="gray" fontWeight="bold" mt="10" mb="6">
            Item List
          </Heading>

          <Table colorScheme="whiteAlpha" size="sm">
            <Thead>
              <Tr>
                <Th
                  color="gray"
                  p="0"
                  fontSize="1rem"
                  textTransform="capitalize"
                  fontWeight="bold"
                  border="0"
                >
                  Item Name
                </Th>
                <Th
                  color="gray"
                  p="0"
                  border="0"
                  fontSize="1rem"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Qtd
                </Th>
                <Th
                  color="gray"
                  p="0"
                  border="0"
                  fontSize="1rem"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Price
                </Th>
                <Th
                  color="gray"
                  p="0"
                  border="0"
                  fontWeight="bold"
                  fontSize="1rem"
                  textTransform="capitalize"
                >
                  Total
                </Th>
                <Th border="0" />
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td pl="0" pr="5" w="40%" border="0">
                  <Input
                    id="client-name"
                    type="text"
                    borderColor="blue.700"
                    bg="blue.700"
                    color="white"
                    fontWeight="bold"
                    fontSize="16"
                    borderWidth="2px"
                    py="7"
                    borderRadius="5px"
                  />
                </Td>

                <Td pl="0" pr="5" w="13%" border="0" my="0">
                  <Input
                    id="client-name"
                    type="text"
                    borderColor="blue.700"
                    bg="blue.700"
                    color="white"
                    fontWeight="bold"
                    fontSize="16"
                    borderWidth="2px"
                    py="7"
                    borderRadius="5px"
                  />
                </Td>

                <Td pl="0" pr="5" w="20%" border="0">
                  <Input
                    id="client-name"
                    type="text"
                    borderColor="blue.700"
                    bg="blue.700"
                    color="white"
                    fontWeight="bold"
                    fontSize="16"
                    borderWidth="2px"
                    py="7"
                    borderRadius="5px"
                  />
                </Td>

                <Td
                  color="white"
                  pl="0"
                  w="20%"
                  pr="5"
                  fontWeight="bold"
                  border="0"
                >
                  156.45
                </Td>

                <Td pl="0" pr="5" border="0">
                  <Icon as={FaTrash} color="gray" fontSize="22" />
                </Td>
              </Tr>

              <Tr>
                <Td pl="0" pr="5" w="40%" border="0">
                  <Input
                    id="client-name"
                    type="text"
                    borderColor="blue.700"
                    bg="blue.700"
                    color="white"
                    fontWeight="bold"
                    fontSize="16"
                    borderWidth="2px"
                    py="7"
                    borderRadius="5px"
                  />
                </Td>

                <Td pl="0" pr="5" w="13%" border="0" my="0">
                  <Input
                    id="client-name"
                    type="text"
                    borderColor="blue.700"
                    bg="blue.700"
                    color="white"
                    fontWeight="bold"
                    fontSize="16"
                    borderWidth="2px"
                    py="7"
                    borderRadius="5px"
                  />
                </Td>

                <Td pl="0" pr="5" w="20%" border="0">
                  <Input
                    id="client-name"
                    type="text"
                    borderColor="blue.700"
                    bg="blue.700"
                    color="white"
                    fontWeight="bold"
                    fontSize="16"
                    borderWidth="2px"
                    py="7"
                    borderRadius="5px"
                  />
                </Td>

                <Td
                  color="white"
                  pl="0"
                  w="20%"
                  pr="5"
                  fontWeight="bold"
                  border="0"
                >
                  156.45
                </Td>

                <Td pl="0" pr="5" border="0">
                  <Icon as={FaTrash} color="gray" fontSize="22" />
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Button
            bg="blue.700"
            borderRadius="20px"
            mt="8"
            w="100%"
            py="6"
            color="white"
            fontWeight="bold"
            mb="10"
          >
            + Add new Item
          </Button>

          <HStack float="right" spacing="2" mb="10">
            <Button
              bg="blue.700"
              borderRadius="25px"
              py="6"
              px="8"
              color="white"
              fontWeight="bold"
            >
              Cancel
            </Button>
            <Button
              bg="purple.light"
              borderRadius="25px"
              py="6"
              px="8"
              color="white"
              fontWeight="bold"
            >
              Save Changes
            </Button>
          </HStack>
        </FormControl>
      </Box>
    </Flex>
  );
}
