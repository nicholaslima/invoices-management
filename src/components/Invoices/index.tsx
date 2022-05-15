import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { ListInvoices } from "./ListInvoices";

export function Invoices() {
  return (
    <Box mx="auto" maxW="800px" w="100%" mt="70px">
      <Header />
      <ListInvoices />
    </Box>
  );
}
