import { Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { InputElement } from "../Form/InputElement";

export function ListItens() {
  return (
    <Table colorScheme="whiteAlpha" size="sm">
      <Thead>
        <Tr>
          <Th
            p="0"
            border="0"
            textTransform="capitalize"
            fontSize="0.75rem"
            color="gray"
            fontWeight="600"
          >
            Item Name
          </Th>
          <Th
            p="0"
            border="0"
            textTransform="capitalize"
            fontSize="0.75rem"
            color="gray"
            fontWeight="500"
          >
            Qtd
          </Th>
          <Th
            p="0"
            border="0"
            textTransform="capitalize"
            fontSize="0.75rem"
            color="gray"
            fontWeight="500"
          >
            Price
          </Th>
          <Th
            p="0"
            border="0"
            textTransform="capitalize"
            fontSize="0.75rem"
            color="gray"
            fontWeight="500"
          >
            Total
          </Th>
          <Th border="0" />
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td pl="0" pr="2" w="40%" border="0">
            <InputElement type="text" />
          </Td>

          <Td pl="0" pr="2" w="13%" border="0" my="0">
            <InputElement type="text" />
          </Td>

          <Td pl="0" pr="4" w="20%" border="0">
            <InputElement type="text" />
          </Td>

          <Td color="white" pl="0" w="20%" pr="5" fontWeight="bold" border="0">
            156.45
          </Td>

          <Td pl="0" pr="5" border="0">
            <Icon as={FaTrash} color="gray" fontSize="22" />
          </Td>
        </Tr>

        <Tr>
          <Td pl="0" pr="2" w="30%" border="0">
            <InputElement type="text" />
          </Td>

          <Td pl="0" pr="2" w="20%" border="0" my="0">
            <InputElement type="text" />
          </Td>

          <Td pl="0" pr="4" w="20%" border="0">
            <InputElement type="text" />
          </Td>

          <Td color="white" pl="0" w="20%" pr="5" fontWeight="bold" border="0">
            156.45
          </Td>

          <Td pl="0" pr="5" border="0">
            <Icon as={FaTrash} color="gray" fontSize="22" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
