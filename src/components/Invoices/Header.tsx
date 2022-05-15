import { Box, Button, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Invoices } from ".";
import { SelectStatusInvoices } from "./SelectStatusInvoices";

export function Header() {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
    >
      <Box>
        <Heading fontFamily="fonts.body" fontWeight="bold" color="white">
          Invoices
        </Heading>
        <Text color="gray" fontWeight="500">
          there are 7 total invoices
        </Text>
      </Box>

      <Flex alignItems="center" gap="4">
        <SelectStatusInvoices />
        <Button
          display="flex"
          borderRadius="35"
          color="white"
          size="md"
          pl="2px"
          bg="purple.light"
          leftIcon={<AiFillPlusCircle size={40} />}
        >
          New Invoice
        </Button>
      </Flex>
    </Flex>
  );
}
